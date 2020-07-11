package data;

import java.util.ArrayList;
import java.util.HashMap;
import logic.*;

public class Model {

    private static Model uniqueInstance;
    
    HashMap<String, Usuario> usuariossesion = new HashMap<String,Usuario>();
    
    
    public static Model instance() {
        if (uniqueInstance == null) {
            uniqueInstance = new Model();
        }
        return uniqueInstance;
    }
    
    private Model() {}
    
    public boolean insertarPregunta(Pregunta pregunta) throws Exception {
        return data.DaoPreguntas.INSERT(pregunta);
    }
    public Usuario getUsuario(String u, String c) throws Exception {
        return data.DaoUsuario.SELECTUSERCLAVE(u, c);
    }
    public ArrayList<Pregunta> getPreguntas() throws Exception {
        return data.DaoPreguntas.SELECT_PREGUNTAS();
    }

    public KeyGame findKeyGame(KeyGame llave) throws Exception{
        return data.DaoKeyGame.SELECT(llave);
    }

    public String generarLlaveJuego() throws Exception {
        Generador generador = new Generador();
        String newkey = generador.getPassword();
        data.DaoKeyGame.INSERT(newkey);
        return newkey;
    }
    public void insertarMapaHashUsuario(Usuario u) throws Exception{
        usuariossesion.put(u.getUsername(),u);
    }
    public void insertarMapaHashUsuarioAnfitrion(Usuario u) throws Exception{
        usuariossesion.put("anfitrion",u);
    }
    public HashMap<String, Usuario> getUsuariossesion() {
        return usuariossesion;
    }
    
}
