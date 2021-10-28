import { AppBar, Box, Toolbar, Typography } from "@material-ui/core"
import WelcomeMessage from "./WelcomeMessage"

const  Navbar = () => {
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Box display= 'flex' justifyContent='space-between' alignItems = 'center' width={1} py={2}>
                    <Typography variant="h6"> My movies</Typography>
                    <Box textAlign='center'>
                        <WelcomeMessage />
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
export default Navbar