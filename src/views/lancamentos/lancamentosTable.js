import React from 'react'
import currencyFormatter from 'currency-formatter'

import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'

export default (props) => {
     const lancamentos = props.lancamentos;
     const totalRecords = (lancamentos && lancamentos.totalElements) || 0
     const content = (lancamentos && lancamentos.content) || []

      return (
        <DataTable value={content} 
                   rows={10} 
                   totalRecords={totalRecords}
                   paginator={true} 
                   lazy={true}
                   onPage={page => props.buscar(page)}>
            <Column field="descricao" header="Descrição" />
            <Column header="Valor" body={(lancamento) => (<div>{ currencyFormatter.format(lancamento.valor, { locale: 'pt-BR'}) }</div>)} />
            <Column field="tipo" header="Tipo" />
            <Column field="mes" header="Mês" />
            <Column field="status" header="Situação" />

            <Column header="Efetivar" body={ (lancamento) => {
                return (
                    <button className="btn btn-success" title="Efetivar"
                            disabled={ lancamento.status !== 'PENDENTE' }
                            onClick={e => props.alterarStatus(lancamento, 'EFETIVADO')} 
                            type="button">
                            <i className="pi pi-check"></i>
                    </button>
                )
            }} />

            <Column header="Cancelar" body={ (lancamento) => {
                return (
                    <button className="btn btn-warning"  title="Cancelar"
                            disabled={ lancamento.status !== 'PENDENTE' }
                            onClick={e => props.alterarStatus(lancamento, 'CANCELADO')} 
                            type="button">
                            <i className="pi pi-times"></i>
                    </button>
                )
            }} />
            
            <Column header="Editar" body={ (lancamento) => {
                return (
                    <button type="button"   title="Editar"
                            className="btn btn-primary"
                            onClick={e => props.editAction(lancamento.id)}>
                            <i className="pi pi-pencil"></i>
                    </button>
                  
                )
            }} />
            <Column header="Remover" body={ (lancamento) => {
                    return (
                       
                        <button type="button"  title="Excluir"
                                className="btn btn-danger" 
                                onClick={ e => props.deleteAction(lancamento)}>
                                <i className="pi pi-trash"></i>
                        </button>
                    )
            }} />

           
        </DataTable>
    )
}
