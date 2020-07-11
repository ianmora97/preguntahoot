/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package service;

import data.Model;
import java.util.ArrayList;
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
@Path("/dash")
public class RestDashBoard {
    @Context
    HttpServletRequest request;
    
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
    @Path("/addPregunta")
    @Consumes({MediaType.APPLICATION_JSON})
    public void agregarPregunta(Pregunta pregunta) {
        try {
            Model.instance().insertarPregunta(pregunta);
        } catch (Exception ex) {
            throw new NotAcceptableException();
        }
    }
    
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
