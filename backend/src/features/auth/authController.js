// Import ng service layer (authService) 
// dito naka-define ang business logic (register at login functions)
const authServices = require('../auth/authService')


// ======================== REGISTER CONTROLLER ========================
/**
 * Controller para sa pag-register ng bagong user
 * Gumagamit ng authServices.register() na may req.body (username, email, password)
 */
const register = async (req, res) => {
    try {
        // Tawagin ang register function sa service at ipasa yung request body
        const user = await authServices.register(req.body)

        // Kung successful, magbalik ng response status 201 (Created)
        res.status(201).json({
            message: 'register sucessfully',
            user // ibabalik din ang bagong user object
        })

    } catch (error) {
        // Kung may error (hal. email exists, kulang field), balik status 500
        res.status(500).json({
            message: error.message
        })
    }
}



// ======================== LOGIN CONTROLLER ========================
/**
 * Controller para sa pag-login ng user
 * Gumagamit ng authServices.login() na may req.body (email, password)
 */
const login = async (req, res) => {
    try {
        // Tawagin ang login function sa service at ipasa yung request body
        const user = await authServices.login(req.body)
        
        // Kung successful, magbalik ng response status 200 (OK)
        res.status(200).json({
            message: 'login sucessfully',
            user // ibabalik ang user object na nahanap
        })
    } catch (error) {
        // Kung mali ang email/password o ibang error, balik status 500
        res.status(500).json({
            message: error.message
        })
    }
}



// ======================== EXPORTS ========================
/**
 * I-export ang controllers para magamit sa routes
 */
module.exports = {
    register,
    login
}
