
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
import javax.ws.rs.GET;
import javax.ws.rs.core.Context;

@Path("/initGame")
public class RestInitGame {
    @Context
    HttpServletRequest request;
    
    @POST
    @Path("/getuser")
    @Produces({MediaType.APPLICATION_JSON})
    public Usuario getUser() {
        try {
            return (Usuario)request.getSession().getAttribute("usuario");
        } catch (Exception ex) {
            throw new NotAcceptableException();
        }
    }
}
