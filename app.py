from flask import Flask, request, jsonify
from flask_cors import CORS
from models import db, Job

app = Flask(__name__)

# ✅ FIXED CORS
CORS(app, resources={r"/*": {"origins": "*"}})

# DB config
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///jobs.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

@app.route("/")
def home():
    return "Backend running"

# ✅ ADD JOB API
@app.route("/add-job", methods=["POST"])
def add_job_api():
    try:
        data = request.get_json()

        print("DATA RECEIVED:", data)

        # Validation
        if not data or not data.get("company") or not data.get("role") or not data.get("status"):
            return jsonify({"error": "All fields required"}), 400

        job = Job(
            company=data.get("company"),
            role=data.get("role"),
            status=data.get("status")
        )

        db.session.add(job)
        db.session.commit()

        return jsonify({"message": "Job added successfully!"})

    except Exception as e:
        print("ERROR:", str(e))
        return jsonify({"error": str(e)}), 500


# ✅ GET JOBS
@app.route("/jobs", methods=["GET"])
def get_jobs():
    jobs = Job.query.all()

    return jsonify([
        {
            "id": j.id,
            "company": j.company,
            "role": j.role,
            "status": j.status
        }
        for j in jobs
    ])


with app.app_context():
    db.create_all()

if __name__ == "__main__":
    app.run(debug=True)