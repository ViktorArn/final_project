
from flask import Flask, render_template, request, Response
import sqlite3
import csv
import io


app = Flask(__name__)


with sqlite3.connect("subscribers.db") as conn:
    conn.execute(
        "CREATE TABLE IF NOT EXISTS subscribers (email TEXT)"
    )

# one for contacts
with sqlite3.connect("contacts.db") as conn:
    conn.execute("""
        CREATE TABLE IF NOT EXISTS contacts (
            name    TEXT,
            email   TEXT,
            message TEXT,
            created DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    """)

@app.route("/", methods=["GET", "POST"])
def index():
    message = ""
    if request.method == "POST":
        # newsletter honeypot
        if request.form.get("hp"):
            message = "Thank you!"
        else:
            email = request.form.get("email", "").strip()
            if email:
                with sqlite3.connect("subscribers.db") as conn:
                    conn.execute(
                        "INSERT INTO subscribers (email) VALUES (?)",
                        (email,)
                    )
                message = "Thanks for subscribing! Check your inbox soon."
            else:
                message = "Please enter a valid email."
    return render_template("index.html", message=message)


@app.route("/contact", methods=["GET", "POST"])
def contact():
    msg = ""
    if request.method == "POST":
        # contact honeypot
        if request.form.get("hp_contact"):
            msg = "Thank you!"
        else:
            name    = request.form.get("name",    "").strip()
            email   = request.form.get("email",   "").strip()
            message = request.form.get("message", "").strip()
            if name and email and message:
                with sqlite3.connect("contacts.db") as conn:
                    conn.execute(
                        "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)",
                        (name, email, message)
                    )
                msg = "Thanks for reaching out! We'll be in touch soon."
            else:
                msg = "Please provide name, email, and a message."
    return render_template("contact.html", msg=msg)



@app.route("/services")
def services():
    return render_template("services.html")

@app.route("/portfolio")
def portfolio():
    return render_template("portfolio.html")

@app.route("/about")
def about():
    return render_template("about.html")


@app.route("/export_subscribers")
def export_subscribers():
    with sqlite3.connect("subscribers.db") as conn:
        cursor = conn.execute("SELECT email FROM subscribers")
        output = io.StringIO()
        writer = csv.writer(output)
        writer.writerow(["email"])
        writer.writerows(cursor.fetchall())
        output.seek(0)
        return Response(
            output.getvalue(),
            mimetype="text/csv",
            headers={"Content-Disposition": "attachment; filename=subscribers.csv"}
        )

@app.route("/export_contacts")
def export_contacts():
    with sqlite3.connect("contacts.db") as conn:
        cursor = conn.execute("SELECT name, email, message, created FROM contacts")
        output = io.StringIO()
        writer = csv.writer(output)
        writer.writerow(["name", "email", "message", "created"])
        writer.writerows(cursor.fetchall())
        output.seek(0)
        return Response(
            output.getvalue(),
            mimetype="text/csv",
            headers={"Content-Disposition": "attachment; filename=contacts.csv"}
        )


if __name__ == "__main__":
    app.run(debug=True)
