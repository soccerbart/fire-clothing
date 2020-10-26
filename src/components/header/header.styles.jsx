import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/fire.svg';

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 80px;
  padding: 15px;
`;

export const OptionsContainer = styled.div`
  font-size: 24px;
  width: 80%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const LogoTag = styled(Logo)`
  height: 50px;
  width: 60px;
  padding: 0px;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
