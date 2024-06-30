using System.Numerics;
using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.InputSystem;

public class Cat : MonoBehaviour
{   
    [SerializeField] private float jump = 6f;
    [SerializeField] private float massOfCat = 0.1f;
    [SerializeField] private float dragFactor = 1f;
    [SerializeField] private float gravityFactor = 1f;
    [SerializeField] private float rotationSpeed = 5f;
    [SerializeField] private GameObject pipeMaker;

    private Transform movement;
    private Rigidbody2D rb;
    private Mouse mouse;
    private bool hasGravity = false;

    private void Awake() {
        mouse = Mouse.current;
        movement = GetComponent<Transform>();
    }
    private void Update() {
        if (Input.GetKeyDown("space") || mouse.leftButton.wasPressedThisFrame || mouse.rightButton.wasPressedThisFrame) {
            if (!hasGravity) { 
                rb = gameObject.AddComponent(typeof(Rigidbody2D)) as Rigidbody2D;
                rb.angularDrag = 0;
                rb.mass = massOfCat;
                rb.drag = dragFactor;
                rb.gravityScale = gravityFactor;
                pipeMaker.SetActive(true);
                Destroy(GetComponent<Animator>());
                hasGravity = true;
            }

            if (GameManager.isGameOver) GameManager.RestartGame();

            //movement.position += new Vector3(0, jump, 0);
            rb.velocity = new UnityEngine.Vector3(0, jump, 0);
        }
    }

    private void FixedUpdate() {
         if (hasGravity) { //Quaternion.Euler -> rotation across axis
            movement.rotation = UnityEngine.Quaternion.Euler(0, 0, rb.velocity.y * rotationSpeed);
        }
    }

    private void OnCollisionEnter2D(Collision2D collision) {
        GameManager.instance.GameOver();
    }

    private void OnTriggerEnter2D(Collider2D collision) {
        Counter.IncreaseCounter();
    }
}
