import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const roupasVerao = [
  {
    nome: "Camiseta + Bermuda",
    descricao: "Visual leve e confortável para dias quentes.",
    imagem:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=700&q=80",
  },
  {
    nome: "Camisa Casual",
    descricao: "Estilo moderno para passeios de verão.",
    imagem:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43?auto=format&fit=crop&w=700&q=80",
  },
  {
    nome: "Look Praia",
    descricao: "Camisa aberta e shorts para dias ensolarados.",
    imagem:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700&q=80",
  },
];

const roupasInverno = [
  {
    nome: "Jaqueta Masculina",
    descricao: "Proteção e estilo para dias frios.",
    imagem:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=700&q=80",
  },
  {
    nome: "Moletom + Jeans",
    descricao: "Confortável para uso diário no inverno.",
    imagem:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=700&q=80",
  },
  {
    nome: "Sobretudo Urbano",
    descricao: "Visual elegante para temperaturas baixas.",
    imagem:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80",
  },
];

function CardRoupa({ roupa }: { roupa: { nome: string; descricao: string; imagem: string } }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: roupa.imagem }} style={styles.imagem} />
      <Text style={styles.nome}>{roupa.nome}</Text>
      <Text style={styles.descricao}>{roupa.descricao}</Text>
    </View>
  );
}

export default function Masculino() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.conteudo}>
      <Text style={styles.titulo}>Moda Masculina</Text>

      <Text style={styles.subtitulo}>Roupas masculinas de verão</Text>
      <View style={styles.linhaCards}>
        {roupasVerao.map((roupa) => (
          <CardRoupa key={roupa.nome} roupa={roupa} />
        ))}
      </View>

      <Text style={styles.subtitulo}>Roupas masculinas de inverno</Text>
      <View style={styles.linhaCards}>
        {roupasInverno.map((roupa) => (
          <CardRoupa key={roupa.nome} roupa={roupa} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eef5ff",
  },
  conteudo: {
    padding: 20,
  },
  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#2563eb",
    textAlign: "center",
    marginBottom: 24,
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 12,
    marginTop: 10,
  },
  linhaCards: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    marginBottom: 28,
  },
  card: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 16,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.18,
    shadowRadius: 5,
    elevation: 5,
  },
  imagem: {
    width: "100%",
    height: 130,
    borderRadius: 12,
    marginBottom: 10,
  },
  nome: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 4,
  },
  descricao: {
    fontSize: 12,
    color: "#666",
  },
});
