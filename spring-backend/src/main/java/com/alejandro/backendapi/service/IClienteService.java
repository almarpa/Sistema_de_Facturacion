package com.alejandro.backendapi.service;

import java.util.List;

import com.alejandro.backendapi.model.Cliente;

public interface IClienteService {

	public List<Cliente> findAll();
	
	public Cliente save(Cliente cliente);
	
	public Cliente findById(Long id);

	public void delete(Long id);
	
	
	}
