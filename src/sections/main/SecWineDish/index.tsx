import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Box, Container, Typography } from "@mui/material";

import { useGetWineByDishesQuery } from "../../../RTK/wineApi";

import CustomButton from "../../../components/button";
import PanelFilterDishComp from "../../../components/PanelFilterDishComp";
import ListCardWineComp from "../../../components/ListCardWineComp";

interface Wine {
  goods_color: string;
  goods_type: string;
  goods_name: string;
  goods_img: string;
  goods_price: number;
  country_goods: {
    name: string;
  };
}

export default function SecWineDish() {
  const [perPage, setPerPage] = useState(1);
  const [wineList, setWineList] = useState<Wine[]>([]);

  const categories = useSelector((state: any) => state.categories.list);
  const activeCategoryID = useSelector(
    (state: any) => state.categories.activeCategory
  );
  const activeCategory = categories.find(
    (category: any) => category.id === activeCategoryID
  )?.name;
  const capitalizeCategory =
    activeCategory !== "fish & seafood"
      ? activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)
      : "Fish and seafood";

  useEffect(() => {
    setWineList([]); // Очищаємо список вин при зміні категорії або перезавантаженні
    setPerPage(1); // Скидаємо лічильник сторінок при зміні категорії або перезавантаженні
  }, [activeCategory]);

  const { data, isLoading } = useGetWineByDishesQuery({
    page: perPage,
    category: capitalizeCategory,
  });

  useEffect(() => {
    if (data) {
      setWineList((prevState) =>
        prevState ? [...prevState, ...data.results] : data.results
      );
    }
  }, [data, data?.results]);

  if (isLoading) return <Typography>...Loading</Typography>;

  return (
    <Box
      sx={{
        padding: "60px 0 100px",
        backgroundColor: "#F5EBE2",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "80px",
            }}
          >
            <Typography
              sx={{
                lineHeight: "150%",
                letterSpacing: "-1.28px",
                color: "#2C3812",
              }}
              variant="h4"
            >
              Perfect match of wine and dish!
            </Typography>

            <Typography
              sx={{
                width: "530px",
                lineHeight: "150%",
                fontSize: "18px",
                fontWeight: "500",
                textAlign: "center",
              }}
              variant="h6"
            >
              Timeless food and wine pairings that never go wrong. Find the
              ideal wine to complement your favorite dishes.
            </Typography>
          </Box>

          <PanelFilterDishComp categories={categories} />

          {wineList && <ListCardWineComp data={wineList} />}

          {!isLoading && data.next && (
            <CustomButton
              color="primary"
              text="SHOW MORE"
              height="44px"
              fontsize="16px"
              borderRadius="4px"
              onClick={() => {
                setPerPage((prevPage) => prevPage + 1);
              }}
              customWhite
            />
          )}
        </Box>
      </Container>
    </Box>
  );
}
