import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Create() {
  const [form, setForm] = useState({
    age: "",
    slot: "",
  });
  const navigate = useNavigate();

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function completePayment(e) {
    e.preventDefault();
    if (form.age >= 18 && form.age <= 65) {
      const newPerson = { ...form };

      await fetch("http://localhost:5000/record/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPerson),
      }).catch((error) => {
        window.alert(error);
        return;
      });

      setForm({ age: "", slot: "" });
      navigate("/");
    }

    setForm({ age: "", slot: "" });
    navigate("/");
  }

  return (
    <div>
      <h3>Yoga class enrollment</h3>
      <form onSubmit={completePayment}>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            className="form-control"
            id="age"
            value={form.age}
            onChange={(e) => updateForm({ age: e.target.value })}
          />
        </div>

        <div className="form-group">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="positionOptions"
              id="positionIntern"
              value="6-7 AM"
              checked={form.slot === "6-7 AM"}
              onChange={(e) => updateForm({ slot: e.target.value })}
            />
            <label htmlFor="positionIntern" className="form-check-label">
              6-7 AM
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="positionOptions"
              id="positionJunior"
              value="7-8 AM"
              checked={form.slot === "7-8 AM"}
              onChange={(e) => updateForm({ slot: e.target.value })}
            />
            <label htmlFor="positionJunior" className="form-check-label">
              7-8 AM
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="positionOptions"
              id="positionSenior"
              value="8-9 AM"
              checked={form.slot === "8-9 AM"}
              onChange={(e) => updateForm({ slot: e.target.value })}
            />
            <label htmlFor="positionSenior" className="form-check-label">
              8-9 AM
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="positionOptions"
              id="positionJunior"
              value="5-6"
              checked={form.slot === "5-6"}
              onChange={(e) => updateForm({ slot: e.target.value })}
            />
            <label htmlFor="positionJunior" className="form-check-label">
              5-6 PM
            </label>
          </div>
        </div>
        <div className="form-group">
          <input type="submit" value="Pay" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
}
