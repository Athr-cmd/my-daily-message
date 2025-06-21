name: Update daily message
on:
  schedule:
    - cron: '0 6 * * *' # 06:00 UTC = 09:00 قطر
jobs:
  generate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Generate message
        run: |
          npm install
          node message-generator.js
      - name: Commit update
        run: |
          git config user.name "GitHub Actions"
          git config user.email "actions@github.com"
          git add message.json
          git commit -m "تحديث رسالة اليوم" || echo "no change"
          git push
