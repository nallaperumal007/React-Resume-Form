// DataTable.js
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const DataTable = () => {
  const navigate = useNavigate();
  const formData = JSON.parse(localStorage.getItem('formData') || '{}');

  const handleRowClick = () => {
    navigate('/details');
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Salary</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Date of Birth</TableCell>
            <TableCell>Start Date</TableCell>
            <TableCell>End Date</TableCell>
            <TableCell>Mobile Number</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Skill Set</TableCell>
            <TableCell>Remarks</TableCell>
            <TableCell>Portfolio</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Tech Stack</TableCell>
            <TableCell>Resume</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {formData && (
            <TableRow onClick={handleRowClick}>
              <TableCell>{formData.firstName}</TableCell>
              <TableCell>{formData.lastName}</TableCell>
              <TableCell>{formData.address}</TableCell>
              <TableCell>{formData.salary}</TableCell>
              <TableCell>{formData.age}</TableCell>
              <TableCell>{formData.dob}</TableCell>
              <TableCell>{formData.startDate}</TableCell>
              <TableCell>{formData.endDate}</TableCell>
              <TableCell>{formData.mobileNumber}</TableCell>
              <TableCell>{formData.location}</TableCell>
              <TableCell>{formData.email}</TableCell>
              <TableCell>{formData.skillSet}</TableCell>
              <TableCell>{formData.remarks}</TableCell>
              <TableCell>{formData.portfolio}</TableCell>
              <TableCell>{formData.type}</TableCell>
              <TableCell>{formData.techStack}</TableCell>
              <TableCell>{formData.resume ? formData.resume.name : 'No file uploaded'}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
