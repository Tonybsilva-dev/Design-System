import React from 'react';
import { Link } from '@chakra-ui/core'

// import { Container } from './styles';

const components: React.FC = () => {
  return (
    <form>
      <div>
        <img src="#" alt="Vicoa" />
      </div>
      <div className="button-block">
        <div className="user">
          <img src="#" alt="user" />
          <br />
          <label>Nome do usuário</label>
          <div className="info-user">
            <label>Permissão</label>
            <label id="status">Status: </label>
          </div>
        </div>
        <div className="button-block">
          <Link>
            Logout
            </Link>
        </div>
      </div>
      {/* <div className="button-group">
            <div className="button-block">
              <button>1</button>
            </div>
            <div className="button-block">
              <button>Sair</button>
            </div>
          </div> */}
    </form>
  );;
}

export default components;