import React from 'react';
import styled from 'styled-components';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';
const Container = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 1.8;
`;
const IconSource = () => {
  return (
    <>
      <Navbar />
      <Container>
        <div
          style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px' }}
        >
          창고 상세보기 페이지
          <br />
        </div>
        <div>
          온도계 - Icons made by{' '}
          <a
            href="https://www.flaticon.com/authors/good-ware"
            title="Good Ware"
          >
            Good Ware
          </a>{' '}
          from{' '}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
        <div>
          포장인력 - Icons made by{' '}
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik
          </a>{' '}
          from{' '}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
        <div>
          주차 공간 - Icons made by{' '}
          <a href="https://www.flaticon.com/authors/fjstudio" title="fjstudio">
            fjstudio
          </a>{' '}
          from{' '}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
        <div>
          CCTV - Icons made by{' '}
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik
          </a>{' '}
          from{' '}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
        <div>
          보험 - Icons made by{' '}
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik
          </a>{' '}
          from{' '}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
        <div>
          경비업체 - Icons made by{' '}
          <a
            href="https://www.flaticon.com/authors/those-icons"
            title="Those Icons"
          >
            Those Icons
          </a>{' '}
          from{' '}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
        <div>
          WMS - Icons made by{' '}
          <a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp">
            Eucalyp
          </a>{' '}
          from{' '}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </Container>
      <Footer />
    </>
  );
};
export default IconSource;
