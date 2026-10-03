from flask import Flask, jsonify
from flask_cors import CORS
import psycopg2

app = Flask(__name__)
CORS(app)


@app.route("/")
def home():
    return jsonify({
        "message": "DevOps Dashboard API is running!",
        "status": "healthy"
    })


@app.route("/health")
def health():
    return jsonify({
        "status": "healthy"
    })


@app.route("/database")
def database():
    try:
        connection = psycopg2.connect(
            host="database",
            database="devops",
            user="devops",
            password="devops123",
            port=5432
        )
        connection.close()

        return jsonify({
            "database": "PostgreSQL",
            "status": "healthy"
        })

    except Exception as error:
        return jsonify({
            "database": "PostgreSQL",
            "status": "unhealthy",
            "error": str(error)
        }), 500


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)