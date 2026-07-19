import { Platform, StyleSheet, StatusBar } from "react-native";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    paddingHorizontal: 16,
    paddingTop: Platform.OS === "ios" ? 44 : (StatusBar.currentHeight || 20) + 16,
  },
  screenHeader: {
    fontSize: 28,
    fontWeight: "700",
    color: "#f8fafc",
    marginBottom: 18,
  },
  inputWrapper: {
    backgroundColor: "#f8fafc",
    borderRadius: 18,
    padding: 16,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 16,
    elevation: 6,
  },
  input: {
    height: 50,
    backgroundColor: "#ffffff",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#cbd5e1",
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#0f172a",
  },
  searchButtonContainer: {
    marginTop: 14,
    borderRadius: 14,
    overflow: "hidden",
  },
  list: {
    flexGrow: 1,
  },
  scrollContent: {
    paddingBottom: 32,
  },
  itemCard: {
    backgroundColor: "#1f2937",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 12,
    elevation: 3,
  },
  itemTitle: {
    fontSize: 16,
    color: "#f8fafc",
    fontWeight: "600",
  },
  emptyText: {
    color: "#94a3b8",
    textAlign: "center",
    marginTop: 24,
  },
});
