using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class Counter : MonoBehaviour {
    [SerializeField] private TextMeshProUGUI score;
    private static int count;
    public delegate void OnScoreChanged();
    public static event OnScoreChanged ScoreChangedEvent;
    
    private void Awake() {
        count = 0;
        UpdateScore();
    }

    private void OnEnable() {
        ScoreChangedEvent += UpdateScore;
    }

    private void OnDisable() {
        ScoreChangedEvent -= UpdateScore;
    }

    public static void IncreaseCounter() {
        count++;
        ScoreChangedEvent?.Invoke();
    }

    private void UpdateScore() {
        score.text = count.ToString();
    }
}
