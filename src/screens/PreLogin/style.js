import styled from 'styled-components/native';
import {Platform} from 'react-native';
import Constants from 'expo-constants';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color:#EEEDEB;
`;

export const BtnToNavigate = styled.TouchableOpacity`
  width: 371px;
  height: 50px;
  justify-content: center;
  align-items: center;
  background: #20B1AA;
  border-radius: 10px;
`;
export const TextEventos = styled.Text`
  color: #222222;
  font-size: 24px;
  line-height: 36px;
  font-family: 'Poppins_700Bold';
`;

export const TextArtigos = styled.Text`
  color: #222222;
  font-size: 24px;
  line-height: 36px;
  font-family: 'Poppins_700Bold';
`;
export const TextBtn = styled.Text`
  font-size: 14px;
  line-height: 21px;
  color: #EEEDEB;
  font-family: 'Poppins_700Bold';
`;