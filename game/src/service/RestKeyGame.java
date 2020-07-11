
package service;

import data.Model;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
import javax.ws.rs.NotAcceptableException;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import logic.KeyGame;
import logic.Usuario;

@Path("/keyGame")
public class RestKeyGame {
    @Context
    HttpServletRequest request;
    
    @POST
    @Path("/getKey")
    @Consumes({MediaType.APPLICATION_JSON})
    @Produces({MediaType.APPLICATION_JSON})
    public KeyGame getUser(KeyGame llave) {
        try {
            return Model.instance().findKeyGame(llave);
        } catch (Exception ex) {
            throw new NotAcceptableException();
        }
    }
}
