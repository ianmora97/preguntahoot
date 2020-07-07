package data;

import logic.*;

public class Model {

    private static Model uniqueInstance;

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
}
