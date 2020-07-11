/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package service;

import data.Model;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
import javax.ws.rs.NotAcceptableException;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import logic.*;

/**
 *
 * @author ianmo
 */
@Path("/inGame")
public class RestInGame {
    @Context
    HttpServletRequest request;
    
    @POST
    @Path("/getuser")
    @Produces({MediaType.APPLICATION_JSON})
    public Usuario getUser() {
        try {
            HashMap<String,Usuario> usuarios = Model.instance().getUsuariossesion();
            for (Map.Entry<String, Usuario> entry : usuarios.entrySet()) {
                String key = entry.getKey();
                Usuario value = entry.getValue();
                if(key.equals("anfitrion")){
                    request.getSession(true).setAttribute("anfitrion", value);
                    return value;
                }
            }
            return null;
        } catch (Exception ex) {
            throw new NotAcceptableException();
        }
    }

    @POST
    @Path("/getPreguntas")
    @Produces({MediaType.APPLICATION_JSON})
    public ArrayList<Pregunta> getPreguntas() {
        try {
            return Model.instance().getPreguntas();
        } catch (Exception ex) {
            throw new NotAcceptableException();
        }
    }
    
    @POST
    @Path("/getKeyGame")
    @Produces({MediaType.APPLICATION_JSON})
    public KeyGame getKeyGame() {
        try {
            String key = (String)request.getSession().getAttribute("llaveJuego");
            return new KeyGame(0, key);
        } catch (Exception ex) {
            throw new NotAcceptableException();
        }
    }
}
