import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Inicio() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.animalPrint} />

      <View style={styles.logoBox}>
        <Text style={styles.logo}>Y2K STORE</Text>
      </View>

      <View style={styles.menu}>
        <Text style={styles.menuItem}>Home</Text>
        <Text style={styles.menuItem}>Feminino</Text>
        <Text style={styles.menuItem}>Masculino</Text>
        <Text style={styles.menuItem}>Produtos</Text>
      </View>

      <View style={styles.banner}>
        <View style={styles.bannerText}>
          <Text style={styles.bannerTitle}>Moda Y2K</Text>
          <Text style={styles.bannerSubtitle}>Brilho, atitude e nostalgia anos 2000</Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>VER COLEÇÃO</Text>
          </TouchableOpacity>
        </View>

        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=80",
          }}
          style={styles.bannerImage}
        />
      </View>

      <View style={styles.cardsArea}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Feminino</Text>
          <Text style={styles.cardText}>Looks rosa, jeans, cropped e acessórios.</Text>
          <TouchableOpacity style={styles.cardButton}>
            <Text style={styles.cardButtonText}>ENTRAR</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Masculino</Text>
          <Text style={styles.cardText}>Streetwear, cargos, jaquetas e camisetas.</Text>
          <TouchableOpacity style={styles.cardButton}>
            <Text style={styles.cardButtonText}>ENTRAR</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Novidades</Text>
          <Text style={styles.cardText}>Peças estilosas inspiradas nos anos 2000.</Text>
          <TouchableOpacity style={styles.cardButton}>
            <Text style={styles.cardButtonText}>VER MAIS</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=700&q=80",
        }}
        style={styles.personagem}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff9cdb",
  },
  animalPrint: {
    height: 55,
    backgroundColor: "#d49a25",
    borderBottomWidth: 4,
    borderColor: "#111",
  },
  logoBox: {
    alignItems: "center",
    marginTop: -20,
    marginBottom: 12,
  },
  logo: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#ff4fc3",
    backgroundColor: "#111",
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 18,
    borderWidth: 3,
    borderColor: "#ffffff",
  },
  menu: {
    marginHorizontal: 18,
    backgroundColor: "#050505",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    marginBottom: 14,
  },
  menuItem: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  banner: {
    marginHorizontal: 18,
    backgroundColor: "#8b0077",
    borderRadius: 14,
    borderWidth: 3,
    borderColor: "#fff",
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  bannerText: {
    flex: 1,
  },
  bannerTitle: {
    color: "#fff",
    fontSize: 34,
    fontWeight: "bold",
  },
  bannerSubtitle: {
    color: "#ffd6f4",
    fontSize: 15,
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#ff7bd5",
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: "center",
    width: 140,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  bannerImage: {
    width: 130,
    height: 170,
    borderRadius: 12,
    borderWidth: 3,
    borderColor: "#111",
  },
  cardsArea: {
    flexDirection: "row",
    gap: 10,
    marginHorizontal: 18,
    marginTop: 18,
    marginBottom: 20,
  },
  card: {
    flex: 1,
    backgroundColor: "#ffd5f1",
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#fff",
    padding: 10,
    minHeight: 145,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#9d006d",
    marginBottom: 6,
  },
  cardText: {
    color: "#7a245f",
    fontSize: 12,
    marginBottom: 12,
  },
  cardButton: {
    backgroundColor: "#ff65c8",
    paddingVertical: 7,
    borderRadius: 18,
    alignItems: "center",
    marginTop: "auto",
  },
  cardButtonText: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "bold",
  },
  personagem: {
    width: 170,
    height: 240,
    alignSelf: "flex-end",
    marginRight: 24,
    marginTop: -20,
    borderRadius: 18,
  },
});