import { makeStyles } from "@material-ui/core";
export default makeStyles({
    media:{
        height:250,
        
    },
    border: {
        border: 'solid',
      },
      fullHeightCard: {
        height: '90%',
        
      },
      card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        border: '2px solid white',
        backgroundColor:'#b7d9d6',
      },
      activeCard: {
        borderBottom: '20px solid #22289a',
      },
      grid: {
        display: 'flex',
      },
      details: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px',
      },
      title: {
        padding: '0 16px',
      },
      cardActions: {
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
        fontWeight:'800',
      },
    });
    
