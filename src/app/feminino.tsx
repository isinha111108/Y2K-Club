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
    nome: "Vestido Floral",
    descricao: "Leve, colorido e ideal para dias quentes.",
    imagem:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=700&q=80",
  },
  {
    nome: "Cropped + Saia",
    descricao: "Look moderno, fresco e feminino.",
    imagem:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=700&q=80",
  },
  {
    nome: "Conjunto Claro",
    descricao: "Confortável para passeios durante o dia.",
    imagem:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=80",
  },
];

const roupasInverno = [
  {
    nome: "Casaco Elegante",
    descricao: "Quente, bonito e ótimo para dias frios.",
    imagem:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=700&q=80",
  },
  {
    nome: "Suéter + Jeans",
    descricao: "Visual casual e confortável para o inverno.",
    imagem:
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=700&q=80",
  },
  {
    nome: "Look com Sobretudo",
    descricao: "Estilo sofisticado para temperaturas baixas.",
    imagem:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=700&q=80",
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

export default function Feminino() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.conteudo}>
      <Text style={styles.titulo}>Moda Feminina</Text>

      <Text style={styles.subtitulo}>Roupas femininas de verão</Text>
      <View style={styles.linhaCards}>
        {roupasVerao.map((roupa) => (
          <CardRoupa key={roupa.nome} roupa={roupa} />
        ))}
      </View>

      <Text style={styles.subtitulo}>Roupas femininas de inverno</Text>
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
    backgroundColor: "#fff1f7",
  },
  conteudo: {
    padding: 20,
  },
  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#d63384",
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
    marginBottom: 28,
    gap: 10,
  },
  card: {
    flex: 1,
    backgroundColor: "#ffffff",
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
    lineHeight: 16,
  },
});
