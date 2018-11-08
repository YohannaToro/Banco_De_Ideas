/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.pdsw.persistence.mybatisimpl.mappers;
import java.util.Date;
import java.util.List;
import org.apache.ibatis.annotations.Param;

import edu.eci.pdsw.entities.*;
/**
 *
 * @author HAILYOWIS
 */
public interface  IniciativaMapper {

    public void crearIniciativa(@Param("ini")Iniciativa ini);
    
    public Iniciativa consultarIniciativa(@Param("nombreIni")String  nombreIni);
    
    public List<Iniciativa> consultarIniciativas(@Param("orden")String orden);
    
    public List<Iniciativa> consultarIniciativasRelacionadas(@Param("ini")Iniciativa ini);
    
    public List<Iniciativa> consultarIniciativasxClaves(@Param("clave")String clave);
    
    public List<Iniciativa> consultarIniciativasxEstado(@Param("estado")Estado estado);
    
    public void agregarComentario(@Param("usr")Usuario usr, 
    		@Param("ini")Iniciativa ini,
    		@Param("comentario")Comentario comentario);
    
    public int consultarCantidadVotos(@Param("nombreIni")String nombreIni);
    
    public List<Usuario> consultarInteresados(@Param("nombreIni")String nombreIni);
    
    public void modificarEstado(@Param("nombreIni")String nombreIniciativa, 
    		@Param("estado") Estado estado);
    
    public void agregarPalabraClave(@Param("nombreIni")String nombreIni,
    		@Param("descripcion") String desc);
     
}
