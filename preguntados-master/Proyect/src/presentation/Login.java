package presentation;

import javax.ws.rs.Consumes;
import javax.ws.rs.NotAcceptableException;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import logic.Usuario;

@Path("/login")
public class Login {

    @POST
    @Consumes({ MediaType.APPLICATION_JSON })
    @Produces({ MediaType.APPLICATION_JSON })
    public Usuario login(Usuario usuario) {
        try {
            Usuario base = new Usuario("Hola", "Recogido", 1);
            return base;
        } catch (Exception ex) {
            throw new NotAcceptableException();
        }
    }

}