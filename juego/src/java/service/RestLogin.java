
package service;

import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.NotAcceptableException;
import logic.Usuario;
import data.Model;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.core.Context;

@Path("/login")
public class RestLogin {
    @Context
    HttpServletRequest request;
    
    @POST
    @Consumes({MediaType.APPLICATION_JSON})
    @Produces({MediaType.APPLICATION_JSON})
    public Usuario login(Usuario usuario) {
        try {
            Usuario actual = Model.instance().getUsuario(usuario.getUsername(), usuario.getClave()); 
            request.getSession(true).setAttribute("usuario", actual);
            return actual;
        } catch (Exception ex) {
            throw new NotAcceptableException();
        }
    }
}
