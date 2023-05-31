import { makeStyles } from "tss-react/mui";



 const getStyles = makeStyles()((theme)=>{

    return{

        imageSelectorStyle: {
            width: "100%",
            "&::file-selector-button": {
              height: "40px",
              border: "none",
              background: theme.palette.primary.main,
              padding: "0px 12px",
              margin: "10px 10px 0px 0px",
              borderRadius: "30px",
              color: "#fff",
              cursor: "pointer",
              transition: "background 0.3s ease-in-out",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: "1rem",
              marginRight: "1rem",
            },
            "&::file-selector-button:hover": {
              background: "transparent",
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: theme.palette.primary.main,
              color: theme.palette.primary.main,
            },
          }

    }

})
export default getStyles