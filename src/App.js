import logo from './logo.svg';
import './App.css';
import GithubImage from './github.png';

function App() {
  return (
    <div className='container text-center'>
      <h1 className='py-5'>Github Profile</h1>
      <form action="">
        <div className='form-group'>
          <label htmlFor="">Github User</label>
          <div className='input-group'>
            <input className='form-control' type="text" name="" id=""
              required

            />
            <span className='input-group-btn'>

              <button type='submit' className='btn btn-success'>Enviar</button>
            </span>

          </div>

        </div>


      </form>
      <div className='py-5'>

        <img src={GithubImage} alt="" className='responsive rounded-circle'

          height="180px"

        />
      </div>

    </div>
  );
}

export default App;
