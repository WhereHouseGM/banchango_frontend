import styled from 'styled-components';

export const Container = styled.div``;

export const Wrapper = styled.div`
  box-align: center;
  align-items: center;
  box-pack: center;
  justify-content: center;
  width: 100%;
  display: flex;
  align-content: center;
`;

export const BackgroundImage = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-image: url(${(props) => props.bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
`;

export const RegisterContainer = styled.div`
  background-color: #1d489b;
  width: 750px;
  border-radius: 15px;
  overflow: hidden;
  margin-top: 20px;
  @media screen and (max-width: 750px) {
    width: 90%;
    min-width: 270px;
  }
`;

export const ImageContainer = styled.div`
  background-color: #1d489b;
  height: 112px;
  display: flex;
  box-pack: center;
  justify-content: center;
  box-align: center;
  box-orient: vertical;
  box-direction: normal;
  flex-direction: column;
`;

export const RegisterImage = styled.div`
  width: 270px;
  height: 90px;
  background-image: url(${(props) => props.bgImage});
  background-size: contain;
  align-self: center;
  background-repeat: no-repeat;
`;

export const HeaderTitleTop = styled.div`
  color: black;
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 20px;
  line-height: 1.8;
  margin-top: 10px;
  font-weight: bold;
  text-align: center;
`;

export const HeaderTitleBottom = styled.div`
  color: #1d489b;
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export const TextContainer = styled.div`
  display: flex;
  box-pack: center;
  justify-content: center;
  box-align: center;
  align-items: center;
  box-orient: vertical;
  box-direction: normal;
  flex-direction: column;
  background-color: white;
  padding-bottom: 30px;
`;

export const TwoElementContainer = styled.div`
  display: flex;
  margin: 0 auto;
  @media screen and (max-width: 750px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const ItemContainer = styled.div`
  align-items: center;
`;

export const InputTitle = styled.div`
  color: black;
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: bold;
  font-size: 16px;
  margin-top: 30px;
  text-align: center;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid #1d489b;
  width: ${(props) => props.width};
  margin-top: 10px;
  margin-left: 3px;
  margin-right: 3px;
  transition: all 0.2s ease;
  &:focus {
    background-color: lightgray;
    border-bottom: 3px solid #1d489b;
  }
`;

export const ArrayInput = styled.input`
  border: none;
  border-bottom: 1px solid #1d489b;
  width: ${(props) => props.width};
  margin-top: 10px;
  margin-left: 3px;
  margin-right: 3px;
  transition: all 0.2s ease;
  &:focus {
    background-color: lightgray;
    border-bottom: 3px solid #1d489b;
  }
  @media screen and (max-width: 400px) {
    width: 256px;
  }
`;

export const DescriptionInput = styled.textarea`
  border: 1px solid #1d489b;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  transition: all 0.2s ease;
  margin-top: 10px;
  &:focus {
    background-color: lightgray;
    border: 3px solid #1d489b;
  }

  @media screen and (max-width: 750px) {
    width: 80%;
    align-self: center;
  }
`;

export const ButtonAndInputContainer = styled.div`
  display: flex;
`;

export const AddButton = styled.span`
  background-color: #3090f0;
  padding: 2px;
  color: white;
  margin: auto 0;
  border-radius: 4px;
  font-family: 'Nanum Gothic', sans-serif;
  transition: all 0.2s ease;
  &:hover {
    cursor: pointer;
    background-color: #1d489b;
  }
`;

export const RemoveButton = styled.span`
  background-color: #ef4f4f;
  padding: 2px;
  color: white;
  margin: auto 0;
  font-family: 'Nanum Gothic', sans-serif;
  border-radius: 4px;
  transition: all 0.2s ease;
  &:hover {
    cursor: pointer;
    background-color: #ee9595;
  }
`;

export const RadioButtonContainer = styled.span`
  margin-top: 10px;
  display: flex;
  justify-content: center;
`;

export const RadioButton = styled.input`
  margin: 0 10px;
  align-self: flex-start;
`;

export const CheckBox = styled.input`
  margin-left: 20px;
  align-self: flex-start;
`;

export const RadioButtonLabel = styled.label`
  margin-left: 3px;
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 16px;
  color: black;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
`;

export const CheckBoxLine = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: flex-start;
  width: 25%;
  @media screen and (max-width: 750px) {
    width: 50%;
  }
`;

export const SubmitButton = styled.div`
  margin-top: 20px;
  background-color: #3090f0;
  padding: 10px;
  border-radius: 15px;
  text-align: center;
  transition: all 0.2s ease;
  font-weight: bold;
  color: white;
  font-family: 'Nanum Gothic', sans-serif;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #202cab;
  }
`;

export const InputType = {
  NAME: 'name',
  SPACE: 'space',
  ADDRESS: 'address',
  ADDRESS_DETAIL: 'addressDetail',
  DESCRIPTION: 'description',
  AVAIL_WEEK_DAYS: 'availableWeekdays',
  OPEN_AT: 'openAt',
  CLOSE_AT: 'closeAt',
  AVAIL_TIME_DETAIL: 'availableTimeDetail',
  INSURANCES: 'insurances',
  CCTV_EXIST: 'cctvExist',
  SECURITY_COMPANIES: 'securityCompanies',
  DOOR_LOCK_EXIST: 'doorLockExist',
  AIR_CONDITIONING_TYPE: 'airConditioningType',
  WORKER_EXIST: 'workerExist',
  CAN_PARK: 'canPark',
  MAIN_ITEM_TYPE: 'mainItemTypes',
  WAREHOUSE_TYPE: 'warehouseType',
  MIN_RELEASE_PER_MONTH: 'minReleasePerMonth',
  DELIVERY_TYPES: 'deliveryTypes',
  WAREHOUSE_FACILITY_USAGES: 'warehouseFacilityUsages',
  WAREHOUSE_USAGE_CAUTIONS: 'warehouseUsageCautions',
  WAREHOUSE_CONDITION: 'warehouseCondition',
};
