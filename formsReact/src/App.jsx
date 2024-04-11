import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    password: '',
    email: '',
    address: {
      street: '',
      zipCode: '',
      number: '',
      neighborhood: '',
      city: '',
      state: ''
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      address: {
        ...prevState.address,
        [name]: value
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1 className='title'> Formulário React</h1>
      <form onSubmit={handleSubmit} className='forms'>
        <label className='form-label'>
          Nome completo:
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className='form-input'
          />
        </label>
        <br />
        <label className='form-label'>
          Senha:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className='form-input'
          />
        </label>
        <br />
        <label className='form-label'>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className='form-input'
          />
        </label>
        <br />
        <label className='form-label'>
          Logradouro:
          <input
            type="text"
            name="street"
            value={formData.address.street}
            onChange={handleAddressChange}
            className='form-input'
          />
        </label>
        <br />
        <label className='form-label'>
          CEP:
          <input
            type="text"
            name="zipCode"
            value={formData.address.zipCode}
            onChange={handleAddressChange}
            className='form-input'
          />
        </label>
        <br />
        <label className='form-label'>
          Número:
          <input
            type="text"
            name="number"
            value={formData.address.number}
            onChange={handleAddressChange}
            className='form-input'
          />
        </label>
        <br />
        <label className='form-label'>
          Bairro:
          <input
            type="text"
            name="neighborhood"
            value={formData.address.neighborhood}
            onChange={handleAddressChange}
            className='form-input'
          />
        </label>
        <br />
        <label className='form-label'>
          Cidade:
          <select
            name="city"
            value={formData.address.city}
            onChange={handleAddressChange}
            className='form-input'
          >
            <option value="">Selecione</option>
            <option value="Recife">Recife</option>
            <option value="Jaboatao dos guararapes">Jaboatão dos Guararapes</option>
            <option value="Olinda">Olinda</option>
            {/* Adicione outras cidades conforme necessário */}
          </select>
        </label>
        <br />
        <label className='form-label'>
          Estado:
          <select
            name="state"
            value={formData.address.state}
            onChange={handleAddressChange}
            className='form-input'
          >
            <option value="">Selecione</option>
            <option value="Pe">Pernambuco</option>
            <option value="Ceara">Ceará</option>
            <option value="Acre">Acre</option>
            {/* Adicione outros estados conforme necessário */}
          </select>
        </label>
        <br />
        <button type="submit" className='submit-btn'>Enviar</button>
      </form>
    </div>
  );
}

export default App;
