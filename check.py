import sqlite3

def show_table(db_path, table_name):
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    cursor.execute(f"SELECT * FROM {table_name}")
    rows = cursor.fetchall()
    print(f"Contents of {table_name} ({len(rows)} rows):")
    for row in rows:
        print(row)
    conn.close()

if __name__ == "__main__":
    show_table("subscribers.db", "subscribers")
    show_table("contacts.db", "contacts")
   
