import { StyledDivContainer } from "./style";
import black from "../../assets/images/black_background.png";
import { Header } from "../../components/header";
import { FilterHome } from "../../components/filterMenu";
import { CardsWeek } from "../../components/cardsWeeks";
import { CardsMeal } from "../../components/cardsMeals";
import homeBackground from "../../assets/images/home.png";

export const HomePage = () => {
  return (
    <StyledDivContainer>
      <img src={black} className="black2" alt="" />
      <div className="backgroundDIvGray">
        <div className="weeksContainer">
          <div className="week">
            <p>Semana 1</p>
            <div className="cards">
              <CardsWeek />
              <CardsWeek />
              <CardsWeek />
              <CardsWeek />
              <CardsWeek />
              <CardsWeek />
              <CardsWeek />
              <CardsWeek />
            </div>
          </div>

          <div className="week">
            <p>Semana 1</p>
            <div className="cards">
              <CardsWeek />
              <CardsWeek />
              <CardsWeek />
              <CardsWeek />
            </div>
          </div>
        </div>
        <div className="mealsContainer">
          <div className="header">
            <p>Pratos cadastrados</p>
          </div>
          <div className="cardsMeal">
            <CardsMeal />
            <CardsMeal />
            <CardsMeal />
            <CardsMeal />
            <CardsMeal />
          </div>
        </div>
      </div>
      <img src={homeBackground} className="background" alt="" />
      <img src={black} className="black" alt="" />

      <Header />
      <FilterHome />
    </StyledDivContainer>
  );
};
