import { makeStyles } from "@material-ui/core";

const style = makeStyles({
  container: {
    padding: "0 5%",
    width: "100%",
    margin: 0,
    marginLeft:"0%",
    
  },
  card: {
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'space-between',
    width:'110%',
    height:'55vh',
    borderRadius:10,
  textAlign:'center',
    color:'white',
 
  },
  infoCard:{
    display:'flex',
    flexDirection:"column",
    textAlign:'center',
    
  }
 
});

export default style;
