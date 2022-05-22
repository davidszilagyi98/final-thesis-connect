import styled from "styled-components";
import Header from "../components/Header";
import LeftsideProjects from "../components/LeftsideProjects";
import { Container } from "./Home";

const ExploreProjects = () => {
  return (
    <div>
      <Container>
        <Header />
        <LayoutProjects>
          <LeftsideProjects />
          <Explorecontainer>
            <div className="sort-buttons">
              <Sortbuttons>
                <a href="/explore">People</a>
              </Sortbuttons>
              <Sortbuttons>
                <a href="/explore/organizations">Organizations</a>
              </Sortbuttons>
              <Sortbuttons className="active">
                <a href="/explore/projects">Projects </a>
              </Sortbuttons>
            </div>

            <ProjectsContainer>
              <ProjectCard>
                <img src="../images/porto.jpg" alt="place" className="projetcImage" />
                <img src="../images/dyt.png" alt="ngo" className="organizationImage" />
                <MainInfo>
                  <h3>Born to be alive</h3>
                  <p>Porto, Portugal</p>
                  <p>22-28 May, 2022</p>
                  <VolunteersFrom>
                    <span>From:</span>
                    <img src="../images/czech-flag.svg" alt="flag" />
                    <img src="../images/german-flag.svg" alt="flag" />
                    <img src="../images/danish-flag.svg" alt="flag" />
                    <img src="../images/romanian-flag.svg" alt="flag" />
                    <img src="../images/macedonian-flag.svg" alt="flag" />
                  </VolunteersFrom>
                </MainInfo>
                <Topics>
                  <div>Mindfulness</div>
                  <div>Travel</div>
                  <div>Sustainability</div>
                </Topics>
                <ProjectDetailes>Join us in our Youth Exchange where you can learn more about mind fulness and time management from out trainers.</ProjectDetailes>
                <ButtonContainer>
                  <ApplyButton>Apply</ApplyButton>
                  <InfoPackButton>Infopack</InfoPackButton>
                </ButtonContainer>
              </ProjectCard>

              <ProjectCard>
                <img src="../images/athen.jpg" alt="place" className="projetcImage" />
                <img src="../images/fajub.png" alt="ngo" className="organizationImage" />
                <MainInfo>
                  <h3>Youth Hacker</h3>
                  <p>Athens, Greece</p>
                  <p>11-18 May, 2022</p>
                  <VolunteersFrom>
                    <span>From:</span>
                    <img src="../images/czech-flag.svg" alt="flag" />
                    <img src="../images/german-flag.svg" alt="flag" />
                    <img src="../images/danish-flag.svg" alt="flag" />
                    <img src="../images/romanian-flag.svg" alt="flag" />
                    <img src="../images/macedonian-flag.svg" alt="flag" />
                  </VolunteersFrom>
                </MainInfo>
                <Topics>
                  <div>IT</div>
                  <div>Travel</div>
                  <div>E-commerce</div>
                </Topics>
                <ProjectDetailes>Join us in our Youth Exchange where you can learn more about mind fulness and time management from out trainers.</ProjectDetailes>
                <ButtonContainer>
                  <ApplyButton>Apply</ApplyButton>
                  <InfoPackButton>Infopack</InfoPackButton>
                </ButtonContainer>
              </ProjectCard>

              <ProjectCard>
                <img src="../images/venice.jpg" alt="place" className="projetcImage" />
                <img src="../images/dyt.png" alt="ngo" className="organizationImage" />
                <MainInfo>
                  <h3>Heritage Youth Perspective</h3>
                  <p>Venice, Italy</p>
                  <p>20-27 June, 2022</p>
                  <VolunteersFrom>
                    <span>From:</span>
                    <img src="../images/czech-flag.svg" alt="flag" />
                    <img src="../images/german-flag.svg" alt="flag" />
                    <img src="../images/danish-flag.svg" alt="flag" />
                    <img src="../images/romanian-flag.svg" alt="flag" />
                    <img src="../images/macedonian-flag.svg" alt="flag" />
                  </VolunteersFrom>
                </MainInfo>
                <Topics>
                  <div>Culture</div>
                  <div>Travel</div>
                  <div>Heritage</div>
                </Topics>
                <ProjectDetailes>Join us in our Youth Exchange where you can learn more about mind fulness and time management from out trainers.</ProjectDetailes>
                <ButtonContainer>
                  <ApplyButton>Apply</ApplyButton>
                  <InfoPackButton>Infopack</InfoPackButton>
                </ButtonContainer>
              </ProjectCard>

              <ProjectCard>
                <img src="../images/cyprus.jpg" alt="place" className="projetcImage" />
                <img src="../images/gdoce.png" alt="ngo" className="organizationImage" />
                <MainInfo>
                  <h3>Youth in art</h3>
                  <p>Limassol, Cyprus</p>
                  <p>08-11 May, 2022</p>
                  <VolunteersFrom>
                    <span>From:</span>
                    <img src="../images/czech-flag.svg" alt="flag" />
                    <img src="../images/german-flag.svg" alt="flag" />
                    <img src="../images/danish-flag.svg" alt="flag" />
                    <img src="../images/romanian-flag.svg" alt="flag" />
                    <img src="../images/macedonian-flag.svg" alt="flag" />
                  </VolunteersFrom>
                </MainInfo>
                <Topics>
                  <div>Art</div>
                  <div>Travel</div>
                  <div>Culture</div>
                </Topics>
                <ProjectDetailes>Join us in our Youth Exchange where you can learn more about mind fulness and time management from out trainers.</ProjectDetailes>
                <ButtonContainer>
                  <ApplyButton>Apply</ApplyButton>
                  <InfoPackButton>Infopack</InfoPackButton>
                </ButtonContainer>
              </ProjectCard>

              <ProjectCard>
                <img src="../images/paris.jpg" alt="place" className="projetcImage" />
                <img src="../images/dyt.png" alt="ngo" className="organizationImage" />
                <MainInfo>
                  <h3>Cultural senses</h3>
                  <p>Paris, France</p>
                  <p>08-15 June, 2022</p>
                  <VolunteersFrom>
                    <span>From:</span>
                    <img src="../images/czech-flag.svg" alt="flag" />
                    <img src="../images/german-flag.svg" alt="flag" />
                    <img src="../images/danish-flag.svg" alt="flag" />
                    <img src="../images/romanian-flag.svg" alt="flag" />
                    <img src="../images/macedonian-flag.svg" alt="flag" />
                  </VolunteersFrom>
                </MainInfo>
                <Topics>
                  <div>Culture</div>
                  <div>Travel</div>
                  <div>Gastronomy</div>
                </Topics>
                <ProjectDetailes>Join us in our Youth Exchange where you can learn more about mind fulness and time management from out trainers.</ProjectDetailes>
                <ButtonContainer>
                  <ApplyButton>Apply</ApplyButton>
                  <InfoPackButton>Infopack</InfoPackButton>
                </ButtonContainer>
              </ProjectCard>

              <ProjectCard>
                <img src="../images/bp.jpg" alt="place" className="projetcImage" />
                <img src="../images/Nextgeneration.png" alt="ngo" className="organizationImage" />
                <MainInfo>
                  <h3>To-get-there</h3>
                  <p>Budapest, Hungary</p>
                  <p>22-18 July, 2022</p>
                  <VolunteersFrom>
                    <span>From:</span>
                    <img src="../images/czech-flag.svg" alt="flag" />
                    <img src="../images/german-flag.svg" alt="flag" />
                    <img src="../images/danish-flag.svg" alt="flag" />
                    <img src="../images/romanian-flag.svg" alt="flag" />
                    <img src="../images/macedonian-flag.svg" alt="flag" />
                  </VolunteersFrom>
                </MainInfo>
                <Topics>
                  <div>Economy</div>
                  <div>Travel</div>
                  <div>Entrepreneurship</div>
                </Topics>
                <ProjectDetailes>Join us in our Youth Exchange where you can learn more about mind fulness and time management from out trainers.</ProjectDetailes>
                <ButtonContainer>
                  <ApplyButton>Apply</ApplyButton>
                  <InfoPackButton>Infopack</InfoPackButton>
                </ButtonContainer>
              </ProjectCard>
            </ProjectsContainer>
          </Explorecontainer>
        </LayoutProjects>
      </Container>
    </div>
  );
};

const LayoutProjects = styled.div`
  display: grid;
  grid-template-areas: "leftsideprojects mainexplore ";
  grid-template-columns: minmax(0, 5fr) minmax(0, 16fr);
  column-gap: 25px;
  row-gap: 25px;
  margin: 25px 0;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;

const Sortbuttons = styled.button`
  margin-right: 1.5rem;
  color: #333;
  background-color: #f0f0f0;
  box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.4);
  -webkit-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.4);
  -moz-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.4);
  border: none;
  border-radius: 15px;
  padding: 10px;
  width: 150px;
  margin-top: 1rem;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    box-shadow: none;
  }
`;

const Explorecontainer = styled.div`
  grid-area: mainexplore;

  .sort-buttons {
    display: flex;
    flex-direction: row;

    .active {
      -webkit-box-shadow: inset 0px 0px 5px #c1c1c1;
      -moz-box-shadow: inset 0px 0px 5px #c1c1c1;
      box-shadow: inset 0px 0px 5px #c1c1c1;
      outline: none;
      font-weight: 500;
    }
  }
`;

const ProjectsContainer = styled.div`
  display: grid;
  max-width: 85%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-flow: row;
  grid-row-gap: 10px;
  grid-column-gap: 10px;
  grid-template-areas: "projectcard";

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
    margin: 0 auto;
  }
`;
const ProjectCard = styled.div`
  grid-area: "projectcard";
  background-color: #f9f9f9;
  border-radius: 15px;
  width: 340px;
  margin-top: 20px;
  padding: 15px 15px 40px 15px;
  box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.2);
  -webkit-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.2);
  -moz-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.2);

  .projetcImage {
    display: block;
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .organizationImage {
    width: 65px;
    height: 65px;
    background-color: #fff;
    box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.2);
    -webkit-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.2);
    -moz-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.2);
    border-radius: 50%;
    object-fit: contain;
    margin-top: -10%;
    margin-left: 80%;
  }
`;
const MainInfo = styled.div`
  margin-top: -20px;
`;

const VolunteersFrom = styled.div`
  span {
    margin-right: 5px;
  }
`;

const Topics = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 0 20px 0;

  div {
    display: flex;
    justify-content: center;
    background-color: #fff;
    border: 1px solid #d9b233;
    width: 29%;
    font-size: 0.7rem;
    padding: 4px;
  }
`;

const ProjectDetailes = styled.div`
  font-size: 0.8rem;
  margin-bottom: 30px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const ApplyButton = styled.button`
  background-image: linear-gradient(to right top, #114265, #15486d, #184e76, #1c557e, #1f5b87);
  border: none;
  color: #fff;
  width: 40%;
  height: 30px;
  font-size: 0.8rem;
  border-radius: 8px;
  text-decoration: none;
  box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.4);
  -webkit-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.4);
  -moz-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.4);
  &:hover {
    cursor: pointer;
  }
`;

const InfoPackButton = styled.button`
  background-color: #ebebeb;
  border: none;
  color: #333;
  width: 40%;
  height: 30px;
  font-size: 0.8rem;
  border-radius: 8px;
  text-decoration: none;
  box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.4);
  -webkit-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.4);
  -moz-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.4);
  &:hover {
    cursor: pointer;
    background-color: #fff;
  }
`;

export default ExploreProjects;
