import { Box, List, ListItem, Stack } from "@mui/material";
import { common } from "@mui/material/colors";
import { primary } from "../../theme/palette";
import AdaptiveNameWineComp from "../AdaptiveNameWineComp";
import NumberPackBtnComp from "../NumberPackBtnComp";
import WinePriceComp from "../WinePriceComp/inedx";
import RouterLink from "../../routes/routerLink";
import { paths } from "../../config/path";
import CustomButton from "../button";
import SecondaryButtonComp from "../SecondaryButtonComp";

import trashIcon from '../../assets/icons/trash.svg';
import arrowRightIcon from '../../assets/icons/arrow-right.svg';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ICollections } from "../../types/collections";

const mainBoxHover = {
  position: 'absolute',
  top: 0,
  zIndex: 2,
  borderColor: primary.main,
  '.textBlock': {
    marginBottom: '65px'
  },
  ".buttonHide": {
    bottom: '5%',
  }
}
const mainBoxStyle = {
  width: '304px',
  display: 'flex',
  border: `1px solid ${common.white}`,
  borderRadius: "10px",
  overflow: 'hidden',
  transition: "all 250ms",
  position: 'relative',
'&:hover': mainBoxHover
}
const BoxDescriptionStyle = {
  padding: '10px 15px 15px',
  backgroundColor: common.white,
  display: 'flex',
  flexDirection: 'column',
  gap: '21px',
  lineHeight: 'normal',
  borderRadius: "10px",
}
const BoxButtonStyle = {
  width: '274px',
  position: 'absolute',
  bottom: '-50%',
  transition: "all 250ms",
  display: "flex",
  gap: "5px",
}

export default function CollectionCardItemComp({ id, box_img, box_price, box_name }: ICollections) {
  
    const navigate = useNavigate();
    const pathNavigate = 'collections';

  return (
    <Stack sx={mainBoxStyle}>
      <Box>
        <img src={box_img} alt="giftBox" />
      </Box>
      {/* Description */}
      <Box sx={BoxDescriptionStyle}>
        <Stack className="textBlock" spacing={1}>
          <AdaptiveNameWineComp>{box_name}</AdaptiveNameWineComp>
           <Stack sx={{justifyContent: 'space-between', alignItems: 'center'}} direction="row">
            <List sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px'
            }}>
              <ListItem sx={{width: 'auto'}}>
                <NumberPackBtnComp />
              </ListItem>
              <ListItem sx={{width: 'auto'}}>
                <NumberPackBtnComp second={false} />
              </ListItem>
            </List> 
            <WinePriceComp>{box_price}</WinePriceComp>
          </Stack>
        </Stack>
          <Box className="buttonHide" sx={BoxButtonStyle}>
            <RouterLink to={paths.CARTPAGE} >
              <CustomButton
              color="primary"
              text="Buy"
              width="140px"
              height="44px"
              borderRadius="4px"
            />
            </RouterLink>
          <SecondaryButtonComp onClick={() => {
            toast.info('pushed on button');
              // toast.success(`${goods_name} Wine added to cart`);
              // dispatch(addWine(el));
            }}>{trashIcon}</SecondaryButtonComp>
            <SecondaryButtonComp onClick={() => {
                navigate(`/${pathNavigate}/${id}`)
            }}>{arrowRightIcon}</SecondaryButtonComp>
          </Box>
      </Box>
    </Stack>
  )
}