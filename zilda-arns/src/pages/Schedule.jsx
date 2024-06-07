import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import * as S from "../components/Style.jsx";
import Dropdown from './Drops.jsx';
import axios from 'axios';
import Logo from "../assets/logoBranca.png";
import imgHome from "../assets/home.png";
import imgPerfil from "../assets/perfil.png";
import imgDependentes from "../assets/dependentes.png";
import imgSair from "../assets/imgSair.png";

const Schedule = () => {
  const [selectedPaciente, setSelectedPaciente] = useState('');
  const [selectedEspecialidade, setSelectedEspecialidade] = useState('');
  const [filteredDoctorsUrl, setFilteredDoctorsUrl] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [availableDates, setAvailableDates] = useState([]);
  const [availableTimes, setAvailableTimes] = useState([]);
  const [error, setError] = useState('');

  const handlePacienteChange = (event) => {
    setSelectedPaciente(event.target.value);
  };

  const handleEspecialidadeChange = (event) => {
    const especialidadeId = event.target.value;
    setSelectedEspecialidade(especialidadeId);
    setFilteredDoctorsUrl(`http://localhost:5000/doctors?especialidadeId=${especialidadeId}`);
  };

  const handleDoctorChange = (event) => {
    const doctorId = event.target.value;
    setSelectedDoctor(doctorId);

    // Fetch available dates for the selected doctor
    axios.get(`http://localhost:5000/doctors/${doctorId}`)
      .then(response => {
        const doctor = response.data;
        setAvailableDates(doctor.availableDates || []);
        setAvailableTimes([]); // Reset available times when a new doctor is selected
        setSelectedDate(''); // Reset selected date when a new doctor is selected
        setSelectedTime(''); // Reset selected time when a new doctor is selected
      })
      .catch(error => {
        console.error('Erro ao carregar os dados do médico:', error);
      });
  };

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setSelectedDate(selectedDate);

    // Fetch available times for the selected date
    axios.get(`http://localhost:5000/doctors/${selectedDoctor}`)
      .then(response => {
        const doctor = response.data;
        const selectedDoctorData = doctor.availableDates.find(data => data === selectedDate);
        setAvailableTimes(selectedDoctorData ? doctor.availableTimes : []);
        setSelectedTime(''); // Reset selected time when a new date is selected
      })
      .catch(error => {
        console.error('Erro ao carregar os horários disponíveis:', error);
      });
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleAgendamento = async (event) => {
    event.preventDefault();
    try {
        const newAgendamento = {
          paciente: selectedPaciente,
          especialidade: selectedEspecialidade,
          doctor: selectedDoctor,
          date: selectedDate,
          time: selectedTime,
        };
  
        const response = await axios.post("http://localhost:5000/agendamentos", newAgendamento);
        if (response.status === 201) {
          alert("Agendamento efetuado com sucesso!");
          setSelectedPaciente("");
          setSelectedEspecialidade("");
          setSelectedDoctor("");
          setSelectedDate("");
          setSelectedTime("");
        }
      } catch (error) {
        console.error("Erro ao agendar consulta:", error);
        setError("Falha ao agendar consulta. Por favor, tente de novo.");
      }
  }

  return (
    <>
<S.Navigation>
        <img className="logo" src={Logo} alt="" />
        <S.List>
          <li>
            <Link to="/Home">
              {" "}
              <img src={imgHome} alt="" /> Home{" "}
            </Link>{" "}
          </li>
          <li>
            <Link to="/Profile">
              {" "}
              <img src={imgPerfil} alt="" /> Perfil{" "}
            </Link>{" "}
          </li>
          <li>
            <Link to="/AddDep">
              {" "}
              <img src={imgDependentes} alt="" /> Adicionar dependentes{" "}
            </Link>{" "}
          </li>
          <li>
            <Link to="/">
              {" "}
              <img src={imgSair} alt="" /> Sair{" "}
            </Link>{" "}
          </li>
        </S.List>
      </S.Navigation>

    <S.Form onSubmit={handleAgendamento}>
      <h1>Agendamento de Consultas</h1>
      <Dropdown
        url="http://localhost:5000/users"
        label="Selecionar Paciente"
        onChange={handlePacienteChange}
        selectedValue={selectedPaciente}
      />
      <Dropdown
        url="http://localhost:5000/especialidades"
        label="Selecionar Especialidade"
        onChange={handleEspecialidadeChange}
        selectedValue={selectedEspecialidade}
      />
      <Dropdown
        url={filteredDoctorsUrl}
        label="Selecionar Médico"
        onChange={handleDoctorChange}
        selectedValue={selectedDoctor}
      />
      <Dropdown
        label="Selecionar Data"
        options={availableDates.map(date => ({ id: date, name: date }))}
        onChange={handleDateChange}
        selectedValue={selectedDate}
      />
      <Dropdown
        label="Selecionar Horário"
        options={availableTimes.map(time => ({ id: time, name: time }))}
        onChange={handleTimeChange}
        selectedValue={selectedTime}
      />
      <button type="submit">
        Cadastrar
      </button>
      {error && <p>{error}</p>}
    </S.Form>
    </>
  );
};

export default Schedule;
