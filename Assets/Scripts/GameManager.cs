using System.Threading;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class GameManager : MonoBehaviour {
    public static GameManager instance;
    public static bool isGameOver;
    [SerializeField] private GameObject gameOverCanvas;
     
    private void Awake() {
        if (instance == null) instance = this;
        isGameOver = false;
        Time.timeScale = 1f;
    }

    public void GameOver() {
        gameOverCanvas.SetActive(true);
        Time.timeScale = 0f; //Pause
        isGameOver = true;
    }

    public static void RestartGame() {
        SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex);
    }
}
