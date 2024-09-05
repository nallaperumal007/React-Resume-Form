// Details.js
import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

const Details = () => {
  const formData = JSON.parse(localStorage.getItem('formData') || '{}');

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Details</Typography>
      <Paper style={{ padding: 20 }}>
        <Typography variant="h6">First Name: {formData.firstName}</Typography>
        <Typography variant="h6">Last Name: {formData.lastName}</Typography>
        <Typography variant="h6">Address: {formData.address}</Typography>
        <Typography variant="h6">Salary: {formData.salary}</Typography>
        <Typography variant="h6">Age: {formData.age}</Typography>
        <Typography variant="h6">Date of Birth: {formData.dob}</Typography>
        <Typography variant="h6">Start Date: {formData.startDate}</Typography>
        <Typography variant="h6">End Date: {formData.endDate}</Typography>
        <Typography variant="h6">Mobile Number: {formData.mobileNumber}</Typography>
        <Typography variant="h6">Location: {formData.location}</Typography>
        <Typography variant="h6">Email: {formData.email}</Typography>
        <Typography variant="h6">Skill Set: {formData.skillSet}</Typography>
        <Typography variant="h6">Remarks: {formData.remarks}</Typography>
        <Typography variant="h6">Portfolio: {formData.portfolio}</Typography>
        <Typography variant="h6">Type: {formData.type}</Typography>
        <Typography variant="h6">Tech Stack: {formData.techStack}</Typography>
        <Typography variant="h6">Resume: {formData.resume ? formData.resume.name : 'No file uploaded'}</Typography>
      </Paper>
    </Container>
  );
};

export default Details;
