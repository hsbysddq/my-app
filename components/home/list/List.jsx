import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  Button,
} from '@mui/material';
import { connect } from 'react-redux';
import { playedGame1 } from '../../../redux/actions/game';
import { LastPlayed } from '../LastPlayed';

const List = (props) => {
  const router = useRouter()
  const { played1, played2, played3, played4, played5, played6 } = props;
  const handleOnClick = () => {
    router.push('/top-score')
  };

  const handlePlayGame = () => {
    router.push('/game');
  };
  return (
    <main>
      <Container maxWidth='md' className='pt-10'>
        <Typography variant='h4' align='center' pb={3} className='font-body'>
          List Game
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className="h-full flex flex-col">
              <div className="relative">
                <CardMedia
                  image="./images/game1.png"
                  sx={{ paddingTop: '60%' }}
                />
                {
                  played1 && (
                    <LastPlayed />
                  )
                }
              </div>
              <CardContent className="flex-grow">
                <Typography variant="h5" className="font-body">
                  Rock Paper Scissor
                </Typography>
                <Typography className="font-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis, unde?
                </Typography>
              </CardContent>
              <CardActions>
                <button className="border border-blue-400 text-blue-400 px-3 py-1 text-md rounded-md" onClick={handlePlayGame}>PLAY</button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className="h-full flex flex-col">
              <div className="relative">
                <CardMedia
                  image="./images/game2.png"
                  sx={{ paddingTop: '60%' }}
                />
                {
                  played2 && (
                    <LastPlayed />
                  )
                }
              </div>
              <CardContent className="flex-grow">
                <Typography variant="h5" className="font-body">
                  Super Mario Car
                </Typography>
                <Typography className="font-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis, unde?
                </Typography>
              </CardContent>
              <CardActions>
                <button className="border border-blue-400 text-blue-400 px-3 py-1 text-md rounded-md" onClick={handleOnClick}>PLAY</button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className="h-full flex flex-col">
              <div className="relative">
                <CardMedia
                  image="./images/game3.png"
                  sx={{ paddingTop: '60%' }}
                />
                {
                  played3 && (
                    <LastPlayed />
                  )
                }
              </div>
              <CardContent className="flex-grow">
                <Typography variant="h5" className="font-body">
                  Assassin Creed
                </Typography>
                <Typography className="font-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis, unde?
                </Typography>
              </CardContent>
              <CardActions>
                <button className="border border-blue-400 text-blue-400 px-3 py-1 text-md rounded-md" onClick={handleOnClick}>PLAY</button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className="h-full flex flex-col">
              <div className="relative">
                <CardMedia
                  image="./images/game4.png"
                  sx={{ paddingTop: '60%' }}
                />
                {
                  played4 && (
                    <LastPlayed />
                  )
                }
              </div>
              <CardContent className="flex-grow">
                <Typography variant="h5" className="font-body">
                  Squid Game
                </Typography>
                <Typography className="font-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis, unde?
                </Typography>
              </CardContent>
              <CardActions>
                <button className="border border-blue-400 text-blue-400 px-3 py-1 text-md rounded-md" onClick={handleOnClick}>PLAY</button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className="h-full flex flex-col">
              <div className="relative">
                <CardMedia
                  image="./images/game5.png"
                  sx={{ paddingTop: '60%' }}
                />
                {
                  played5 && (
                    <LastPlayed />
                  )
                }
              </div>
              <CardContent className="flex-grow">
                <Typography variant="h5" className="font-body">
                  Bom Car
                </Typography>
                <Typography className="font-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis, unde?
                </Typography>
              </CardContent>
              <CardActions>
                <button className="border border-blue-400 text-blue-400 px-3 py-1 text-md rounded-md" onClick={handleOnClick}>PLAY</button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className="h-full flex flex-col">
              <div className="relative">
                <CardMedia
                  image="./images/game6.png"
                  sx={{ paddingTop: '60%' }}
                />
                {
                  played6 && (
                    <LastPlayed />
                  )
                }
              </div>
              <CardContent className="flex-grow">
                <Typography variant="h5" className="font-body">
                  Kena Bridge of spirits
                </Typography>
                <Typography className="font-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis, unde?
                </Typography>
              </CardContent>
              <CardActions>
                <button className="border border-blue-400 text-blue-400 px-3 py-1 text-md rounded-md" onClick={handleOnClick}>PLAY</button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}

const mapStateToProps = (state) => ({
  played1: state.game.played1,
  played2: state.game.played2,
  played3: state.game.played3,
  played4: state.game.played4,
  played5: state.game.played5,
  played6: state.game.played6,
});

const mapDispatchToProps = (dispatch) => ({
  playedGame1: () => dispatch(playedGame1())
})

export default connect(mapStateToProps, mapDispatchToProps)(List);
