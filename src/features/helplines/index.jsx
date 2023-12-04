import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
//
import COLORS from "../base/constants/colors";

const HelpLines = () => {
  const links = [
    {
      name: "Institute of Mental Health (IMH)",
      description:
        "The Institute of Mental Health specialises in mental health-related education services, training opportunities and also, counselling, raising suicide awareness and prevention, psychotherapy, life coaching, relationship coaching, clinical hypnotherapy and a lot more.",
      link: "https://www.imhlk.com/",
      logo: "https://www.imhlk.com/wp-content/uploads/2017/10/cropped-logo-3.png",
    },
    {
      name: "National Council for Mental Health (NCMH) - Sahanaya",
      description:
        "Sahanaya offers a number of services related to mental health, including counselling, character development and rehabilitation. They, in fact, have a separate residential facility in Gorakana, Panadura, which provides rehabilitation programs for individuals with mental health-related difficulties and behavioural disorders.",
      link: "https://www.ncmh.lk/",
      logo: "https://www.ncmh.lk/webassets/demo-categories/medical/images/logo.png",
    },
    {
      name: "Sri Lanka Sumithrayo",
      description:
        "A government-approved charity founded in 1974, Sri Lanka Sumithrayo functions as a non-political, non-religious organisation that provides emotional support for anyone in need. This includes helping people to develop stress coping skills, raising awareness of suicide, its behaviours and prevention, as well as giving support to drug dependents and their families in a secure, confidential and non-judgemental environment.",
      link: "https://www.sumithrayo.org/",
      logo: "https://www.sumithrayo.org/wp-content/uploads/2021/09/Sumithrayo-Logo-edit.png",
    },
    {
      name: "Arnaha Center for Wellbeing",
      description:
        "Arnaha Center for Wellbeing is focused on providing support for a wide range of common mental health difficulties, including depression, low mood, self-esteem, stress, anxiety, anger, OCD, phobias, worry, emotional crises, adjustments, and bereavement. Their evidence-based, high-quality psychological interventions are available for people of all ages and backgrounds.",
      link: "https://arnahawellbeing.com/",
      logo: "https://arnaha.files.wordpress.com/2018/05/img-5301.png",
    },
    {
      name: "Women in Need (WIN)",
      description:
        "Women in Need is focused on giving psychological support to overcome the trauma caused by gender-based violence. Here, they give an opportunity to the victims to share their stories and through proper counselling, they make them feel safe, trusted and empowered to stand against violence in the long run.",
      link: "https://www.winsl.net/",
      logo: "https://i0.wp.com/www.winsl.net/wp-content/uploads/2019/01/cropped-WIN-LOGO-head.jpg?fit=75%2C59&ssl=1",
    },
    {
      name: "CCC Foundation",
      description: `CCC Foundation ensures emotional wellbeing by connecting the people who seek help with trained counsellors through the phone. It's a telephone-based counselling service, which listens to people's concerns and problems — whether it be exam stress, death of a loved one or heartbreak. They help them to connect with their inner strengths as well as other support services so they can manage and overcome the difficulties in their lives.`,
      link: "https://cccfoundation.org.au/",
      logo: "https://cccfoundation.org.au/wp-content/themes/Yukon-Blue/images/logo_ccc.jpg",
    },
    {
      name: "Mel Medura",
      description:
        "Mel Medura is a Drug Demand Reduction Program by Sumithrayo Sri Lanka. They give the necessary help to people who are struggling with various kinds of addictions — substance and behavioural.",
      link: "https://melmedura.org/",
      logo: "https://melmedura.org/wp-content/uploads/2019/03/123-slider-1140x446.jpg",
    },
    {
      name: "Kalyana",
      description: `A passionate collective dedicated to supporting the transformation of the mental health landscape through education, advocacy, collaboration, and community building.`,
      link: "https://kalyanasl.org/our-story/",
      logo: "https://i0.wp.com/kalyanasl.org/wp-content/uploads/2021/05/logo-1.png?fit=1080%2C558&ssl=1",
    },
  ];
  //
  return (
    <Container
      maxWidth="xl"
      sx={{ height: "fit-content", mt: 2, mb: 2 }}
      px={{ xs: 0, lg: 2 }}
    >
      <Box>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            marginBottom: 3,
            color: COLORS.MOONSTONE,
            fontFamily: "Oregano, cursive",
          }}
        >
          Helplines
        </Typography>
        <Grid container>
          {links?.map((link) => (
            <Grid
              item
              sx={{
                width: { xs: "100%", md: "50%" },
                height: "auto",
              }}
            >
              <Link href={link?.link} underline="none" target="_blank">
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    m: 1,
                  }}
                  elevation={14}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      width: { xs: 64, sm: 128 },
                      height: { xs: 64, sm: 128 },
                      bgcolor: COLORS.LIGHT_BLUE,
                      m: 1,
                      p: { xs: 1, sm: 4 },
                      objectFit: "contain",
                    }}
                    src={link?.logo}
                    alt={link?.name}
                  />
                  <CardContent>
                    <Typography
                      sx={{
                        fontSize: 20,
                        fontWeight: 600,
                        color: COLORS.NAVY_BLUE,
                      }}
                    >
                      {link?.name}
                    </Typography>
                    <Typography
                      sx={{
                        color: COLORS.MEDIUM_GRAY,
                        marginTop: "5px",
                        textAlign: "justify",
                        wordBreak: "break-word",
                      }}
                    >
                      {link?.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};
//
export default HelpLines;
