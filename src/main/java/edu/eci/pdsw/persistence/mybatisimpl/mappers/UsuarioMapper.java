/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.pdsw.persistence.mybatisimpl.mappers;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import org.apache.ibatis.annotations.Param;


import edu.eci.pdsw.entities.*;


public interface  UsuarioMapper {

	public void crearUsuario(@Param("usr") Usuario usr);
	public Usuario consultarUsuario(@Param("correo")String correo);
	public List<Usuario> consultarUsuarios();
    
    
    public List<Iniciativa> consultarIniciativasxProponente(@Param("correo")String correo);
    public void asignarPerfil(@Param("correo")String correo,@Param("rol")Rol tipo);
    public void mostrarInteresxIniciativa(@Param("correo")String correo, @Param("nombreIni")String nombreIni, @Param("interes")Interes interes);
    
	public int existeUsuario(@Param("correo") String correo);
	public boolean autenticarUsuario(@Param("usr")Usuario usr);
	
	public List<Usuario> consultarVotantesxIniciativa(@Param("nombreIni")String nombreIni);
}
