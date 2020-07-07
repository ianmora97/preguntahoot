/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package data;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
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
}
