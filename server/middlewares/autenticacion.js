const jwt = require('jsonwebtoken');

// Verificar Token

let verificaToken = ( req, res, next ) => {

    let token = req.get('Authorization');

    jwt.verify( token, process.env.SEED, (err, decode) => {
        if( err ) {
            return res.status(401).json({
                ok:false,
                err
            });
        }

        req.usuario = decode.usuario;
        next();

    });
};

//Verifica AdminRole

let verificaAdmin_role = ( req, res, next ) => {

    let usuario = req.usuario;


    if( usuario.role === 'ADMIN_ROLE' ){
        next();
    }else{
        return res.json({
            ok:false,
            err: {
                message: "No cuenta con el role adecuado para esta accion"
            }
        });
    }

};




module.exports = {
    verificaToken,
    verificaAdmin_role
}