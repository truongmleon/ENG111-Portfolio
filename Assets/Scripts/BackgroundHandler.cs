using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BackgroundHandler : MonoBehaviour {
    [SerializeField] float backgroundIncrease = 0.06f;
    private SpriteRenderer background;

    public void Awake() {
        background = GetComponent<SpriteRenderer>();
    }

    private void Update() {
        background.size += new Vector2(backgroundIncrease, 0f);
    }
}
