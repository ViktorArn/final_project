import pytest
from app import app
from check import show_table

@pytest.fixture
def client():
    app.config['TESTING'] = True
    return app.test_client()

def test_homepage_status(client):
    """Home page loads with HTTP 200."""
    assert client.get('/').status_code == 200

def test_contact_status(client):
    """Contact page loads with HTTP 200."""
    assert client.get('/contact').status_code == 200

def test_show_table_callable():
    """show_table exists and is callable."""
    assert callable(show_table)
