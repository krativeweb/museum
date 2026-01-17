"use client";

import { useState } from "react";

export default function GeneralInquiriesSection({ data }) {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  /* Handle input change */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  /* Validate */
  const validate = () => {
    const newErrors = {};

    if (!formData.first_name) newErrors.first_name = "First name is required";
    if (!formData.last_name) newErrors.last_name = "Last name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.message) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* Submit form */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");

    if (!validate()) return;

    setLoading(true);

    try {
      const formPayload = new FormData();
      formPayload.append("first_name", formData.first_name);
      formPayload.append("last_name", formData.last_name);
      formPayload.append("email", formData.email);
      formPayload.append("phone", formData.phone);
      formPayload.append("message", formData.message);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
        {
          method: "POST",
          body: formPayload, // 🚨 NO headers
        },
      );

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Submission failed");
      }

      setSuccess("Thank you! Your message has been sent.");
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        message: "",
      });
      setErrors({});
    } catch (err) {
      setErrors({
        form: err.message || "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="inquiry-section">
      <div className="inquiry-container">
        {/* Header */}
        <span className="inquiry-eyebrow">HAVE A QUESTION?</span>

        <h2 className="inquiry-title">
          {data?.contact_form_heading || "GENERAL INQUIRIES"}
        </h2>

        <p className="inquiry-description">{data?.contact_form_subheading}</p>

        {success && <p className="text-success mt-3">{success}</p>}
        {errors.form && <p className="text-danger mt-3">{errors.form}</p>}

        {/* Form */}
        <form className="inquiry-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>FIRST NAME *</label>
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
              />
              {errors.first_name && (
                <small className="text-danger">{errors.first_name}</small>
              )}
            </div>

            <div className="form-group">
              <label>LAST NAME *</label>
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
              />
              {errors.last_name && (
                <small className="text-danger">{errors.last_name}</small>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>EMAIL ADDRESS *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <small className="text-danger">{errors.email}</small>
              )}
            </div>

            <div className="form-group">
              <label>PHONE NUMBER *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && (
                <small className="text-danger">{errors.phone}</small>
              )}
            </div>
          </div>

          <div className="form-group full">
            <label>MESSAGE *</label>
            <textarea
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && (
              <small className="text-danger">{errors.message}</small>
            )}
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" />
                Sending...
              </>
            ) : (
              data?.contact_button_title || "SUBMIT FORM"
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
