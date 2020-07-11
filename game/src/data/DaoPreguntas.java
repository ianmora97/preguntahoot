/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package data;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import logic.Pregunta;

/**
 *
 * @author ianmo
 */
public class DaoPreguntas {
    
    public static boolean INSERT(Pregunta pregunta) throws Exception {
        String SQL = "insert into pregunta (texto,respuesta_a,respuesta_b,respuesta_c,respuesta_d,id_categoria,correcta) values(?,?,?,?,?,?,?)";
        try {
            Connection con = Conn.conectar();
            PreparedStatement st = con.prepareStatement(SQL);

            st.setString(1, pregunta.getTexto());
            st.setString(2, pregunta.getRespuestaA());
            st.setString(3, pregunta.getRespuestaB());
            st.setString(4, pregunta.getRespuestaC());
            st.setString(5, pregunta.getRespuestaD());
            st.setInt(6, pregunta.getIdCategoria().getIdCategoria());
            st.setString(7, pregunta.getCorrecta());
            int r = st.executeUpdate();
            con.close();
            st.close();
            return r != 0;
        } catch (SQLException ex) {
            System.out.println(ex);
            return false;
        }
    }
    public static ArrayList<Pregunta> SELECT_PREGUNTAS() throws Exception {
        String SQL = "select * from pregunta;";
        try {
            Connection con = Conn.conectar();
            PreparedStatement st = con.prepareStatement(SQL);
            ResultSet resultado = st.executeQuery();

            ArrayList<Pregunta> lista = new ArrayList<>();
            Pregunta pregunta;

            while (resultado.next()) {
                pregunta = new Pregunta();
                pregunta.setIdPregunta(resultado.getInt("id_pregunta"));
                pregunta.setTexto(resultado.getString("texto"));
                pregunta.setRespuestaA(resultado.getString("respuesta_a"));
                pregunta.setRespuestaB(resultado.getString("respuesta_b"));
                pregunta.setRespuestaC(resultado.getString("respuesta_c"));
                pregunta.setRespuestaD(resultado.getString("respuesta_d"));
                pregunta.setIdCategoria(DaoCateogias.findCategoria(Integer.parseInt(resultado.getString("id_categoria"))));
                pregunta.setCorrecta(resultado.getString("correcta"));
                lista.add(pregunta);
            }
            con.close();
            resultado.close();
            st.close();
            return lista;

        } catch (SQLException ex) {
            System.out.println(ex.toString());
            return null;
        }

    }
}
