import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  AsyncStorage,
  ScrollView,
  Linking,
} from 'react-native';

import logo from '../assets/unikor.png';

export default function Report({ navigation }) {
  const report = navigation.getParam('report');

  function handleBack() {
    navigation.navigate('List');
  }

  async function handleLogout() {
    await AsyncStorage.removeItem('nome');
    await AsyncStorage.removeItem('user');

    navigation.navigate('Login');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topMenu}>
        <Image style={styles.logo} source={logo} />
        <Text onPress={handleLogout} size={25}>
          Sair
        </Text>
      </View>

      <Text style={[styles.titleText, { textAlign: 'center', marginTop: 20 }]}>
        Dados do relatório
      </Text>

      <ScrollView style={styles.body}>
        {report ? (
          <View style={styles.report}>
            <View style={styles.portalBox}>
              <Text style={styles.titleText}>ARISP</Text>
              <Text
                style={[styles.dataText, { color: '#6610f2' }]}
                onPress={() =>
                  Linking.openURL(
                    'http://marquinhos-mpsp-api.herokuapp.com' +
                    report.arispPathPdf,
                  )
                }>
                Visualizar PDF
              </Text>
            </View>

            <View style={styles.portalBox}>
              <Text style={styles.titleText}>ARPENP</Text>
              <Text style={styles.fieldText}>Carta registro:</Text>
              <Text style={styles.dataText}>
                {report.cartregistro ? report.cartregistro : '-'}
              </Text>
              <Text style={styles.fieldText}>CNS:</Text>
              <Text style={styles.dataText}>
                {report.cns ? report.cns : '-'}
              </Text>
              <Text style={styles.fieldText}>Nome 1:</Text>
              <Text style={styles.dataText}>
                {report.nome1 ? report.nome1 : '-'}
              </Text>
              <Text style={styles.fieldText}>Novo nome 1:</Text>
              <Text style={styles.dataText}>
                {report.nvnome1 ? report.nvnome1 : '-'}
              </Text>
              <Text style={styles.fieldText}>Nome 2:</Text>
              <Text style={styles.dataText}>
                {report.nome2 ? report.nome2 : '-'}
              </Text>
              <Text style={styles.fieldText}>Novo nome 2</Text>
              <Text style={styles.dataText}>
                {report.nvnome2 ? report.nvnome2 : '-'}
              </Text>
              <Text style={styles.fieldText}>Data Casamento:</Text>
              <Text style={styles.dataText}>
                {report.dataCasamento ? report.dataCasamento : '-'}
              </Text>
              <Text style={styles.fieldText}>Matrícula:</Text>
              <Text style={styles.dataText}>
                {report.matricula ? report.matricula : '-'}
              </Text>
              <Text style={styles.fieldText}>Data Entrada:</Text>
              <Text style={styles.dataText}>
                {report.dataEntrada ? report.dataEntrada : '-'}
              </Text>
              <Text style={styles.fieldText}>Data Registro:</Text>
              <Text style={styles.dataText}>
                {report.dataRegistro ? report.dataRegistro : '-'}
              </Text>
              <Text style={styles.fieldText}>Acervo:</Text>
              <Text style={styles.dataText}>
                {report.acervo ? report.acervo : '-'}
              </Text>
              <Text style={styles.fieldText}>Número Livro:</Text>
              <Text style={styles.dataText}>
                {report.nlivro ? report.nlivro : '-'}
              </Text>
              <Text style={styles.fieldText}>Número Folha:</Text>
              <Text style={styles.dataText}>
                {report.nfolha ? report.nfolha : '-'}
              </Text>
              <Text style={styles.fieldText}>Número Registro:</Text>
              <Text style={styles.dataText}>
                {report.nregistro ? report.nregistro : '-'}
              </Text>
              <Text style={styles.fieldText}>Tipo Livro:</Text>
              <Text style={styles.dataText}>
                {report.tipolivro ? report.tipolivro : '-'}
              </Text>
            </View>

            <View style={styles.portalBox}>
              <Text style={styles.titleText}>CADESP</Text>
              <Text style={styles.fieldText}>CNPJ:</Text>
              <Text style={styles.dataText}>
                {report.cnpj ? report.cnpj : '-'}
              </Text>
              <Text style={styles.fieldText}>Nome Empresarial:</Text>
              <Text style={styles.dataText}>
                {report.nomeEmpresarial ? report.nomeEmpresarial : '-'}
              </Text>
              <Text style={styles.fieldText}>DRT:</Text>
              <Text style={styles.dataText}>
                {report.drt ? report.drt : '-'}
              </Text>
              <Text style={styles.fieldText}>Situação:</Text>
              <Text style={styles.dataText}>
                {report.situacao ? report.situacao : '-'}
              </Text>
              <Text style={styles.fieldText}>Data Inscrição Estado:</Text>
              <Text style={styles.dataText}>
                {report.dtInscricaoEstado ? report.dtInscricaoEstado : '-'}
              </Text>
              <Text style={styles.fieldText}>Regime Estadual:</Text>
              <Text style={styles.dataText}>
                {report.regimeEstadual ? report.regimeEstadual : '-'}
              </Text>
              <Text style={styles.fieldText}>Posto Fiscal:</Text>
              <Text style={styles.dataText}>
                {report.postoFiscal ? report.postoFiscal : '-'}
              </Text>
              <Text style={styles.fieldText}>Nome Fantasia:</Text>
              <Text style={styles.dataText}>
                {report.nomeFantasia ? report.nomeFantasia : '-'}
              </Text>
              <Text style={styles.fieldText}>NIRE:</Text>
              <Text style={styles.dataText}>
                {report.nire ? report.nire : '-'}
              </Text>
              <Text style={styles.fieldText}>Situação Cadastral:</Text>
              <Text style={styles.dataText}>
                {report.situacaoCadastral ? report.situacaoCadastral : '-'}
              </Text>
              <Text style={styles.fieldText}>Ocorrência Fiscal:</Text>
              <Text style={styles.dataText}>
                {report.ocorrenciaFiscal ? report.ocorrenciaFiscal : '-'}
              </Text>
              <Text style={styles.fieldText}>Tipo Unidade:</Text>
              <Text style={styles.dataText}>
                {report.tipoUnidade ? report.tipoUnidade : '-'}
              </Text>
              <Text style={styles.fieldText}>Data Início IE:</Text>
              <Text style={styles.dataText}>
                {report.dtInicioIE ? report.dtInicioIE : '-'}
              </Text>
              <Text style={styles.fieldText}>Data Início Situação:</Text>
              <Text style={styles.dataText}>
                {report.dtInicioSituacao ? report.dtInicioSituacao : '-'}
              </Text>
              <Text style={styles.fieldText}>Formas Atuação:</Text>
              <Text style={styles.dataText}>
                {report.formasAtuacao ? report.formasAtuacao : '-'}
              </Text>
            </View>

            <View style={styles.portalBox}>
              <Text style={styles.titleText}>CAGED</Text>
              <Text style={styles.fieldText}>Autorizado Responsável:</Text>
              <Text style={styles.fieldText}>Bairro:</Text>
              <Text style={styles.dataText}>
                {report.autorizado_responsavel
                  ? report.autorizado_responsavel.bairro
                  : '-'}
              </Text>
              <Text style={styles.fieldText}>CEP:</Text>
              <Text style={styles.dataText}>
                {report.autorizado_responsavel
                  ? report.autorizado_responsavel.cep
                  : '-'}
              </Text>
              <Text style={styles.fieldText}>CNPJ CPF CEI:</Text>
              <Text style={styles.dataText}>
                {report.autorizado_responsavel
                  ? report.autorizado_responsavel.cnpj_cpf_cei
                  : '-'}
              </Text>
              <Text style={styles.fieldText}>CPF:</Text>
              <Text style={styles.dataText}>
                {report.autorizado_responsavel
                  ? report.autorizado_responsavel.cpf
                  : '-'}
              </Text>
              <Text style={styles.fieldText}>Email:</Text>
              <Text style={styles.dataText}>
                {report.autorizado_responsavel
                  ? report.autorizado_responsavel.email
                  : '-'}
              </Text>
              <Text style={styles.fieldText}>Empresa:</Text>
              <Text style={styles.fieldText}>Atividade Econômica CNAE:</Text>
              <Text style={styles.dataText}>
                {((report.empresa || {}) || {}).atividade_economica_cnae
                  ? (report.empresa || {}).atividade_economica_cnae
                  : '-'}
              </Text>
              <Text style={styles.fieldText}>Totais:</Text>
              <Text style={styles.fieldText}>Admissões:</Text>
              <Text style={styles.dataText}>
                {((report.empresa || {}).totais || {}).admissoes
                  ? ((report.empresa || {}).totais || {}).admissoes
                  : '-'}
              </Text>
              <Text style={styles.fieldText}>Desligamentos:</Text>
              <Text style={styles.dataText}>
                {((report.empresa || {}).totais || {}).desligamentos
                  ? ((report.empresa || {}).totais || {}).desligamentos
                  : '-'}
              </Text>
              <Text style={styles.fieldText}>Números filiais:</Text>
              <Text style={styles.dataText}>
                {((report.empresa || {}).totais || {}).numero_filiais
                  ? ((report.empresa || {}).totais || {}).numero_filiais
                  : '-'}
              </Text>
              <Text style={styles.fieldText}>Primeiro dia:</Text>
              <Text style={styles.dataText}>
                {((report.empresa || {}).totais || {}).primeiro_dia
                  ? ((report.empresa || {}).totais || {}).primeiro_dia
                  : '-'}
              </Text>
              <Text style={styles.fieldText}>Total vínculos:</Text>
              <Text style={styles.dataText}>
                {((report.empresa || {}).totais || {}).total_vinculos
                  ? ((report.empresa || {}).totais || {}).total_vinculos
                  : '-'}
              </Text>
              <Text style={styles.fieldText}>Último dia:</Text>
              <Text style={styles.dataText}>
                {((report.empresa || {}).totais || {}).ultimo_dia
                  ? ((report.empresa || {}).totais || {}).ultimo_dia
                  : '-'}
              </Text>
              <Text style={styles.fieldText}>Variação absoluta:</Text>
              <Text style={styles.dataText}>
                {(report.empresa || {}).variacao_absoluta
                  ? (report.empresa || {}).variacao_absoluta
                  : '-'}
              </Text>
              <Text style={styles.fieldText}>Trabalhador:</Text>
              <Text style={styles.fieldText}>CPF:</Text>
              <Text style={styles.dataText}>
                {report.trabalhador ? report.trabalhador.cpf : '-'}
              </Text>
              <Text style={styles.fieldText}>CTPS:</Text>
              <Text style={styles.dataText}>
                {report.trabalhador ? report.trabalhador.ctps : '-'}
              </Text>
              <Text style={styles.fieldText}>Grau de Instrução:</Text>
              <Text style={styles.dataText}>
                {report.trabalhador
                  ? report.trabalhador.grau_de_instrucao
                  : '-'}
              </Text>
              <Text style={styles.fieldText}>Nacionalidade:</Text>
              <Text style={styles.dataText}>
                {report.trabalhador ? report.trabalhador.nacionalidade : '-'}
              </Text>
              <Text style={styles.fieldText}>Nome:</Text>
              <Text style={styles.dataText}>
                {report.trabalhador ? report.trabalhador.nome : '-'}
              </Text>
              <Text style={styles.fieldText}>PCD:</Text>
              <Text style={styles.dataText}>
                {report.trabalhador ? report.trabalhador.pcd : '-'}
              </Text>
              <Text style={styles.fieldText}>PIS Base:</Text>
              <Text style={styles.dataText}>
                {report.trabalhador ? report.trabalhador.pis_base : '-'}
              </Text>
              <Text style={styles.fieldText}>Raça:</Text>
              <Text style={styles.dataText}>
                {report.trabalhador ? report.trabalhador.raca : '-'}
              </Text>
              <Text style={styles.fieldText}>Sexo:</Text>
              <Text style={styles.dataText}>
                {report.trabalhador ? report.trabalhador.sexo : '-'}
              </Text>
              <Text style={styles.fieldText}>Situação PIS:</Text>
              <Text style={styles.dataText}>
                {report.trabalhador ? report.trabalhador.situacao_pis : '-'}
              </Text>
              <Text style={styles.fieldText}>Tempo de trabalho</Text>
              <Text style={styles.fieldText}>CAGED</Text>
              <Text style={styles.dataText}>
                {report.trabalhador
                  ? report.trabalhador.tempo_trabalho.caged
                  : '-'}
              </Text>
              <Text style={styles.fieldText}>RAIS:</Text>
              <Text style={styles.dataText}>
                {report.trabalhador
                  ? report.trabalhador.tempo_trabalho.rais
                  : '-'}
              </Text>
              <Text style={styles.fieldText}>Vínculos do trabalhador:</Text>
              {((report.trabalhador || {}).vinculos_trabalhador || []).map(
                (vinculo, index) => (
                  <View style={styles.box} key={index}>
                    <Text style={styles.fieldText}>CEI:</Text>
                    <Text style={styles.dataText}>
                      {vinculo.cei ? vinculo.cei : '-'}
                    </Text>

                    <Text style={styles.fieldText}>CNPJ:</Text>
                    <Text style={styles.dataText}>
                      {vinculo.cnpj ? vinculo.cnpj : '-'}
                    </Text>

                    <Text style={styles.fieldText}>Entrada:</Text>
                    <Text style={styles.dataText}>
                      {vinculo.entrada ? vinculo.entrada : '-'}
                    </Text>

                    <Text style={styles.fieldText}>Fonte:</Text>
                    <Text style={styles.dataText}>
                      {vinculo.fonte ? vinculo.fonte : '-'}
                    </Text>

                    <Text style={styles.fieldText}>Razão social:</Text>
                    <Text style={styles.dataText}>
                      {vinculo.razao_social ? vinculo.razao_social : '-'}
                    </Text>

                    <Text style={styles.fieldText}>Saída:</Text>
                    <Text style={styles.dataText}>
                      {vinculo.saida ? vinculo.saida : '-'}
                    </Text>

                    <Text style={styles.fieldText}>Situação:</Text>
                    <Text style={styles.dataText}>
                      {vinculo.situacao ? vinculo.situacao : '-'}
                    </Text>
                  </View>
                ),
              )}
            </View>

            <View style={styles.portalBox}>
              <Text style={styles.titleText}>CENSEC</Text>
              <Text style={styles.fieldText}>Carga:</Text>
              <Text style={styles.dataText}>
                {report.carga ? report.carga : '-'}
              </Text>
              <Text style={styles.fieldText}>Mes:</Text>
              <Text style={styles.dataText}>
                {report.mes ? report.mes : '-'}
              </Text>
              <Text style={styles.fieldText}>Ano:</Text>
              <Text style={styles.dataText}>
                {report.ano ? report.ano : '-'}
              </Text>
              <Text style={styles.fieldText}>Ato:</Text>
              <Text style={styles.dataText}>
                {report.ato ? report.ato : '-'}
              </Text>
              <Text style={styles.fieldText}>Dia do ato:</Text>
              <Text style={styles.dataText}>
                {report.diaDoAto ? report.diaDoAto : '-'}
              </Text>
              <Text style={styles.fieldText}>Mes do ato:</Text>
              <Text style={styles.dataText}>
                {report.mesDoAto ? report.mesDoAto : '-'}
              </Text>
              <Text style={styles.fieldText}>Ano do ato:</Text>
              <Text style={styles.dataText}>
                {report.anoDoAto ? report.anoDoAto : '-'}
              </Text>
              <Text style={styles.fieldText}>Livro:</Text>
              <Text style={styles.dataText}>
                {report.livro ? report.livro : '-'}
              </Text>
              <Text style={styles.fieldText}>Complemento livro:</Text>
              <Text style={styles.dataText}>
                {report.complementoLivro ? report.complementoLivro : '-'}
              </Text>
              <Text style={styles.fieldText}>Folha:</Text>
              <Text style={styles.dataText}>
                {report.folha ? report.folha : '-'}
              </Text>
              <Text style={styles.fieldText}>Complemento folha:</Text>
              <Text style={styles.dataText}>
                {report.complementoFolha ? report.complementoFolha : '-'}
              </Text>
              <Text style={styles.fieldText}>UF:</Text>
              <Text style={styles.dataText}>{report.uf ? report.uf : '-'}</Text>
              <Text style={styles.fieldText}>Município:</Text>
              <Text style={styles.dataText}>
                {report.municipio ? report.municipio : '-'}
              </Text>
              <Text style={styles.fieldText}>Cartório:</Text>
              <Text style={styles.dataText}>
                {report.cartorio ? report.cartorio : '-'}
              </Text>
              <Text style={styles.fieldText}>Pessoas:</Text>
              {report.pessoas.map((pessoa, index) => (
                <View style={styles.box} key={index}>
                  <Text style={styles.fieldText}>CPF:</Text>
                  <Text style={styles.dataText}>{pessoa.cpf}</Text>

                  <Text style={styles.fieldText}>Nome:</Text>
                  <Text style={styles.dataText}>{pessoa.nome}</Text>

                  <Text style={styles.fieldText}>Qualidade:</Text>
                  <Text style={styles.dataText}>{pessoa.qualidade}</Text>
                </View>
              ))}
            </View>

            <View style={styles.portalBox}>
              <Text style={styles.titleText}>DETRAN</Text>
              <View>
                {report.detranPathPdf ? (
                  report.detranPathPdf.map((item, index) => (
                    <Text
                      key={index}
                      style={[styles.dataText, { color: '#6610f2' }]}
                      onPress={() =>
                        Linking.openURL(
                          'http://marquinhos-mpsp-api.herokuapp.com' + item,
                        )
                      }>
                      Visualizar PDF
                    </Text>
                  ))
                ) : (
                    <Text style={styles.dataText}>-</Text>
                  )}
              </View>
            </View>
            <View style={styles.portalBox}>
              <Text style={styles.titleText}>INFOCRIM</Text>
              <Text
                style={[styles.dataText, { color: '#6610f2' }]}
                onPress={() =>
                  Linking.openURL(
                    'http://marquinhos-mpsp-api.herokuapp.com' +
                    report.infocrimPathPdf,
                  )
                }>
                Visualizar PDF
              </Text>
            </View>
            <View style={styles.portalBox}>
              <Text style={styles.titleText}>JUCESP</Text>
              <Text
                style={[styles.dataText, { color: '#6610f2' }]}
                onPress={() =>
                  Linking.openURL(
                    'http://marquinhos-mpsp-api.herokuapp.com' +
                    report.arispPathPdf,
                  )
                }>
                Visualizar PDF
              </Text>
              <Text style={styles.fieldText}>Nome da empresa:</Text>
              <Text style={styles.dataText}>
                {report.nomeDaEmpresa ? report.nomeDaEmpresa : '-'}
              </Text>
              <Text style={styles.fieldText}>Tipo de empresa:</Text>
              <Text style={styles.dataText}>
                {report.tipoDeEmpresa ? report.tipoDeEmpresa : '-'}
              </Text>
              <Text style={styles.fieldText}>Data da constituicao:</Text>
              <Text style={styles.dataText}>
                {report.dataDaConstituicao ? report.dataDaConstituicao : '-'}
              </Text>
              <Text style={styles.fieldText}>Inicio da atividade:</Text>
              <Text style={styles.dataText}>
                {report.inicioDaAtividade ? report.inicioDaAtividade : '-'}
              </Text>
              <Text style={styles.fieldText}>CNPJ:</Text>
              <Text style={styles.dataText}>
                {report.cnpj ? report.cnpj : '-'}
              </Text>
              <Text style={styles.fieldText}>Capital:</Text>
              <Text style={styles.dataText}>
                {report.capital ? report.capital : '-'}
              </Text>
              <Text style={styles.fieldText}>Logradouro:</Text>
              <Text style={styles.dataText}>
                {report.logradouro ? report.logradouro : '-'}
              </Text>
              <Text style={styles.fieldText}>Bairro:</Text>
              <Text style={styles.dataText}>
                {report.bairro ? report.bairro : '-'}
              </Text>
              <Text style={styles.fieldText}>Municipio:</Text>
              <Text style={styles.dataText}>
                {report.municipio ? report.municipio : '-'}
              </Text>
              <Text style={styles.fieldText}>Numero:</Text>
              <Text style={styles.dataText}>
                {report.numero ? report.numero : '-'}
              </Text>
              <Text style={styles.fieldText}>Complemento:</Text>
              <Text style={styles.dataText}>
                {report.complemento ? report.complemento : '-'}
              </Text>
              <Text style={styles.fieldText}>CEP:</Text>
              <Text style={styles.dataText}>
                {report.cep ? report.cep : '-'}
              </Text>
              <Text style={styles.fieldText}>UF:</Text>
              <Text style={styles.dataText}>{report.uf ? report.uf : '-'}</Text>
            </View>

            <View style={styles.portalBox}>
              <Text style={styles.titleText}>SIEL</Text>
              <Text style={styles.fieldText}>Nome:</Text>
              <Text style={styles.dataText}>
                {report.nome ? report.nome : '-'}
              </Text>
              <Text style={styles.fieldText}>Título:</Text>
              <Text style={styles.dataText}>
                {report.titulo ? report.titulo : '-'}
              </Text>
              <Text style={styles.fieldText}>Nascimento:</Text>
              <Text style={styles.dataText}>
                {report.nascimento ? report.nascimento : '-'}
              </Text>
              <Text style={styles.fieldText}>Zona:</Text>
              <Text style={styles.dataText}>
                {report.zona ? report.zona : '-'}
              </Text>
              <Text style={styles.fieldText}>Endereço:</Text>
              <Text style={styles.dataText}>
                {report.endereco ? report.endereco : '-'}
              </Text>
              <Text style={styles.fieldText}>Município:</Text>
              <Text style={styles.dataText}>
                {report.municipio ? report.municipio : '-'}
              </Text>
              <Text style={styles.fieldText}>UF:</Text>
              <Text style={styles.dataText}>{report.uf ? report.uf : '-'}</Text>
              <Text style={styles.fieldText}>Data domicílio:</Text>
              <Text style={styles.dataText}>
                {report.dataDomicilio ? report.dataDomicilio : '-'}
              </Text>
              <Text style={styles.fieldText}>Nome do pai:</Text>
              <Text style={styles.dataText}>
                {report.nomePai ? report.nomePai : '-'}
              </Text>
              <Text style={styles.fieldText}>Nome da mãe:</Text>
              <Text style={styles.dataText}>
                {report.nomeMae ? report.nomeMae : '-'}
              </Text>
              <Text style={styles.fieldText}>Naturalidade:</Text>
              <Text style={styles.dataText}>
                {report.naturalidade ? report.naturalidade : '-'}
              </Text>
              <Text style={styles.fieldText}>Código validação:</Text>
              <Text style={styles.dataText}>
                {report.cdValidacao ? report.cdValidacao : '-'}
              </Text>
            </View>

            <View style={styles.portalBox}>
              <Text style={styles.titleText}>SIVEC</Text>
              <Text style={styles.fieldText}>Nome:</Text>
              <Text style={styles.dataText}>
                {report.nome ? report.nome : '-'}
              </Text>
              <Text style={styles.fieldText}>Data de nascimento:</Text>
              <Text style={styles.dataText}>
                {report.dtNscto ? report.dtNscto : '-'}
              </Text>
              <Text style={styles.fieldText}>Número VEC:</Text>
              <Text style={styles.dataText}>
                {report.nroVEC ? report.nroVEC : '-'}
              </Text>
              <Text style={styles.fieldText}>Sexo:</Text>
              <Text style={styles.dataText}>
                {report.sexo ? report.sexo : '-'}
              </Text>
              <Text style={styles.fieldText}>RG:</Text>
              <Text style={styles.dataText}>{report.rg ? report.rg : '-'}</Text>
              <Text style={styles.fieldText}>Tipo RG:</Text>
              <Text style={styles.dataText}>
                {report.tipoRg ? report.tipoRg : '-'}
              </Text>
              <Text style={styles.fieldText}>Data de emissao do RG:</Text>
              <Text style={styles.dataText}>
                {report.dtEmissaoRg ? report.dtEmissaoRg : '-'}
              </Text>
              <Text style={styles.fieldText}>Estado civil:</Text>
              <Text style={styles.dataText}>
                {report.estadoCivil ? report.estadoCivil : '-'}
              </Text>
              <Text style={styles.fieldText}>Naturalizado:</Text>
              <Text style={styles.dataText}>
                {report.naturalizado ? report.naturalizado : '-'}
              </Text>
              <Text style={styles.fieldText}>Grau instrução:</Text>
              <Text style={styles.dataText}>
                {report.grauInstrucao ? report.grauInstrucao : '-'}
              </Text>
              <Text style={styles.fieldText}>Nome do pai:</Text>
              <Text style={styles.dataText}>
                {report.nomePai ? report.nomePai : '-'}
              </Text>
              <Text style={styles.fieldText}>Nome da mãe:</Text>
              <Text style={styles.dataText}>
                {report.nomeMae ? report.nomeMae : '-'}
              </Text>
              <Text style={styles.fieldText}>Cor da pele:</Text>
              <Text style={styles.dataText}>
                {report.corPele ? report.corPele : '-'}
              </Text>
              <Text style={styles.fieldText}>Alcunha:</Text>
              <Text style={styles.dataText}>
                {report.alcunha ? report.alcunha : '-'}
              </Text>
              <Text style={styles.fieldText}>Naturalidade:</Text>
              <Text style={styles.dataText}>
                {report.naturalidade ? report.naturalidade : '-'}
              </Text>
              <Text style={styles.fieldText}>Posto de identificação:</Text>
              <Text style={styles.dataText}>
                {report.postoIdentificacao ? report.postoIdentificacao : '-'}
              </Text>
              <Text style={styles.fieldText}>Fórmula fundamental:</Text>
              <Text style={styles.dataText}>
                {report.formulaFundamental ? report.formulaFundamental : '-'}
              </Text>
              <Text style={styles.fieldText}>Cor dos olhos:</Text>
              <Text style={styles.dataText}>
                {report.corOlhos ? report.corOlhos : '-'}
              </Text>
              <Text style={styles.fieldText}>Cabelo:</Text>
              <Text style={styles.dataText}>
                {report.cabelo ? report.cabelo : '-'}
              </Text>
              <Text style={styles.fieldText}>Profissão:</Text>
              <Text style={styles.dataText}>
                {report.profissao ? report.profissao : '-'}
              </Text>
              <Text style={styles.fieldText}>Endereço residencial:</Text>
              <Text style={styles.dataText}>
                {report.endResidencial ? report.endResidencial : '-'}
              </Text>
              <Text style={styles.fieldText}>Endereço trabalho:</Text>
              <Text style={styles.dataText}>
                {report.endTrabalho ? report.endTrabalho : '-'}
              </Text>
            </View>
          </View>
        ) : (
            <Text>Não há dados!</Text>
          )}
      </ScrollView>
      <TouchableOpacity onPress={handleBack} style={styles.button}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  body: {
    marginTop: 20,
    backgroundColor: '#fff',
    width: '80%',
    alignSelf: 'center',
    paddingHorizontal: 20,
    borderRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 1,
  },
  report: {
    marginVertical: 20,
    backgroundColor: '#fff',
  },
  fieldText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dataText: {
    fontSize: 18,
  },
  button: {
    height: 42,
    backgroundColor: '#6610f2',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  logo: {
    height: 60,
    width: '30%',
    resizeMode: 'center',
    alignSelf: 'center',
  },
  topMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  box: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    marginVertical: 5,
    padding: 20,
    borderRadius: 5
  },
  portalBox: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    marginVertical: 5,
    padding: 20,
    borderRadius: 5,
  },
});
