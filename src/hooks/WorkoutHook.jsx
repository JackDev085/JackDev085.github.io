import { useState, useEffect } from "react";
import WorkoutCard from "../components/ui/WorkoutCard";
import api from "../services/api";

export default function WorkoutHandler({ category }) {
  const [workouts, setWorkouts] = useState([]);
  const [filteredWorkouts, setFilteredWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("Token ausente. Redirecionando para login.");
        window.location.href = "/";
        return;
      }

      try {
        const response = await api.get("/workouts");
        setWorkouts(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkouts();
  }, []);

  useEffect(() => {
    // Filtra os treinos com base na categoria ativa
    const filtered = workouts.filter(
      (workout) => workout.category === category
    );
    setFilteredWorkouts(filtered);
  }, [category, workouts]);

  return (
    <>
      {loading ? (
        <img className="w-50 h-50 m-auto" src="/loading.gif" alt="icone de loading" />
      ) : filteredWorkouts.length > 0 ? (
        filteredWorkouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))
      ) : (
        <span className="sem_treino">❌ Sem treinos para essa categoria</span>
      )}
    </>
  );
}
