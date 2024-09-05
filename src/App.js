// App.js
import React, { useState } from 'react';
import { Button, Grid, TextField, Typography, Container, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import FileUploader from './FileUploader/FileUploader';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

toast.configure();

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [salary, setSalary] = useState('');
  const [age, setAge] = useState('');
  const [dob, setDob] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [skillSet, setSkillSet] = useState('');
  const [remarks, setRemarks] = useState('');
  const [portfolio, setPortfolio] = useState('');
  const [type, setType] = useState('');
  const [techStack, setTechStack] = useState('');
  const [resume, setResume] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!firstName || !lastName || !address || !salary || !age || !dob || !startDate || !endDate || !mobileNumber || !location || !email || !skillSet || !remarks || !portfolio || !type || !techStack || !resume) {
      toast.error('Please fill in all required fields.');
      return;
    }

    const formData = {
      firstName,
      lastName,
      address,
      salary,
      age,
      dob,
      startDate,
      endDate,
      mobileNumber,
      location,
      email,
      skillSet,
      remarks,
      portfolio,
      type,
      techStack,
      resume
    };

    localStorage.setItem('formData', JSON.stringify(formData));
    navigate('/data-table');
  };

  return (
    <Container className="App" maxWidth="md">
      <div className="app-form">
        <Typography variant="h4" gutterBottom align="center" color="primary">
          User Information Form
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} p={2}>
            <label className="form-label">First Name</label>
            <TextField
              fullWidth
              variant="outlined"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="text-field"
            />
          </Grid>
          <Grid item xs={12} sm={6} p={2}>
            <label className="form-label">Last Name</label>
            <TextField
              fullWidth
              variant="outlined"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="text-field"
            />
          </Grid>
          <Grid item xs={12} sm={6} p={2}>
            <label className="form-label">Address</label>
            <TextField
              fullWidth
              variant="outlined"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="text-field"
            />
          </Grid>
          <Grid item xs={12} sm={6} p={2}>
            <label className="form-label">Salary</label>
            <TextField
              fullWidth
              type="number"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              inputProps={{ step: "0.01" }}
              variant="outlined"
              className="text-field"
            />
          </Grid>
          <Grid item xs={12} sm={6} p={2}>
            <label className="form-label">Age</label>
            <TextField
              fullWidth
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              variant="outlined"
              className="text-field"
            />
          </Grid>
          <Grid item xs={12} sm={6} p={2}>
            <label className="form-label">Course</label>
            <TextField
              fullWidth
              type="text"
              value={age} // This should be updated based on your requirements
              onChange={(e) => setAge(e.target.value)}
              variant="outlined"
              className="text-field"
            />
          </Grid>
          <Grid item xs={12} sm={6} p={2}>
            <label className="form-label">Date of Birth</label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="date-picker"
            />
          </Grid>
          <Grid item xs={12} sm={6} p={2}>
            <label className="form-label">Start Date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="date-picker"
            />
          </Grid>
          <Grid item xs={12} sm={6} p={2}>
            <label className="form-label">End Date</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="date-picker"
            />
          </Grid>
          <Grid item xs={12} sm={6} p={2}>
            <label className="form-label">Mobile Number</label>
            <TextField
              fullWidth
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              variant="outlined"
              className="text-field"
            />
          </Grid>
          <Grid item xs={12} sm={6} p={2}>
            <label className="form-label">Location</label>
            <TextField
              fullWidth
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              variant="outlined"
              className="text-field"
            />
          </Grid>
          <Grid item xs={12} sm={6} p={2}>
            <label className="form-label">Email</label>
            <TextField
              fullWidth
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
              className="text-field"
            />
          </Grid>
          <Grid item xs={12} sm={6} p={2}>
            <label className="form-label">Skill Set</label>
            <TextField
              fullWidth
              value={skillSet}
              onChange={(e) => setSkillSet(e.target.value)}
              variant="outlined"
              className="text-field"
            />
          </Grid>
          <Grid item xs={12} sm={6} p={2}>
            <label className="form-label">Remarks</label>
            <TextField
              fullWidth
              multiline
              rows={4}
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
              variant="outlined"
              className="text-field"
            />
          </Grid>
          <Grid item xs={12} sm={6} p={2}>
            <label className="form-label">Portfolio</label>
            <TextField
              fullWidth
              value={portfolio}
              onChange={(e) => setPortfolio(e.target.value)}
              variant="outlined"
              className="text-field"
            />
          </Grid>
          <Grid item xs={12} sm={6} p={2}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Type</InputLabel>
              <Select
                value={type}
                onChange={(e) => setType(e.target.value)}
                label="Type"
              >
                <MenuItem value="Type1">Type1</MenuItem>
                <MenuItem value="Type2">Type2</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} p={2}>
            <label className="form-label">Tech Stack</label>
            <TextField
              fullWidth
              value={techStack}
              onChange={(e) => setTechStack(e.target.value)}
              variant="outlined"
              className="text-field"
            />
          </Grid>
          <Grid item xs={12} sm={6} p={2}>
            <label className="form-label">Resume</label>
            <FileUploader
              onSelectFile={(file) => setResume(file)}
              onDeleteFile={() => setResume(null)}
            />
          </Grid>
          <Grid item xs={12} p={2} style={{ textAlign: 'end' }}>
            <Button variant="outlined" className="cancel-button">Cancel</Button>
            <Button variant="contained" color="primary" className="save-button" onClick={handleSubmit}>Submit</Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

export default App;
